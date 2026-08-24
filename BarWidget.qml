import QtQuick
import Quickshell.Io
import qs.Commons
import qs.Ui
import "Model.js" as Model

BarWidget {
  id: root
  moduleName: "io.github.liambateman.stoic-pulse"

  readonly property var pulseService: bar && bar.shell ? bar.shell.serviceFor(moduleName) : null
  readonly property bool notificationsEnabled: pulseService
    ? pulseService.notificationsEnabled
    : Model.boolSetting(setting("notificationsEnabled", true), true)
  readonly property int intervalMinutes: pulseService
    ? pulseService.intervalMinutes
    : Model.intervalMinutes(setting("intervalMinutes", 60))
  readonly property var currentQuote: pulseService ? pulseService.currentQuote : null

  property bool popupOpen: false
  property int clockTick: 0

  readonly property bool opened: popupOpen
  readonly property string scheduleText: {
    clockTick
    if (!notificationsEnabled) return "Paused"
    if (!pulseService || pulseService.nextNotificationAt <= 0) return Model.intervalLabel(intervalMinutes)
    var remaining = Math.max(0, pulseService.nextNotificationAt - Date.now())
    var minutes = Math.max(1, Math.ceil(remaining / 60000))
    return "Next line in about " + minutes + (minutes === 1 ? " minute" : " minutes")
  }

  function open() { popupOpen = true }
  function close() { popupOpen = false }
  function toggle() { popupOpen = !popupOpen }

  function updateSetting(name, value) {
    var entry = { id: moduleName }
    for (var key in settings) if (key !== "id") entry[key] = settings[key]
    entry[name] = value
    settings = entry
    if (bar && bar.shell && typeof bar.shell.updateEntryInline === "function")
      bar.shell.updateEntryInline(moduleName, entry)
  }

  function toggleNotifications() {
    updateSetting("notificationsEnabled", !notificationsEnabled)
  }

  function setInterval(minutes) {
    updateSetting("intervalMinutes", Model.intervalMinutes(minutes))
  }

  function sendNow() {
    if (pulseService) pulseService.notifyNow(true)
  }

  implicitWidth: trigger.implicitWidth
  implicitHeight: trigger.implicitHeight

  Timer {
    interval: 30000
    running: root.popupOpen
    repeat: true
    onTriggered: root.clockTick += 1
  }

  IpcHandler {
    target: root.moduleName

    function open(): void { root.open() }
    function close(): void { root.close() }
    function show(): void { root.open() }
    function hide(): void { root.close() }
    function toggle(): void { root.toggle() }
    function notifyNow(): void { root.sendNow() }
    function pause(): void { if (root.notificationsEnabled) root.toggleNotifications() }
    function resume(): void { if (!root.notificationsEnabled) root.toggleNotifications() }
  }

  WidgetButton {
    id: trigger
    anchors.fill: parent
    bar: root.bar
    text: "Σ"
    fontSize: Style.font.subtitle
    dimmed: !root.notificationsEnabled
    tooltipText: root.notificationsEnabled
      ? "Stoic Pulse · " + Model.intervalLabel(root.intervalMinutes).toLowerCase()
      : "Stoic Pulse · paused"

    onPressed: function(button) {
      if (button === Qt.RightButton) root.sendNow()
      else if (button === Qt.MiddleButton) root.toggleNotifications()
      else root.toggle()
    }
  }

  PopupCard {
    id: popup
    anchorItem: trigger
    bar: root.bar
    owner: root
    open: root.popupOpen
    contentWidth: popup.fittedContentWidth(Style.space(430))
    contentHeight: popup.fittedContentHeight(content.implicitHeight)

    Column {
      id: content
      anchors.fill: parent
      spacing: Style.space(12)

      Row {
        width: parent.width
        spacing: Style.space(8)

        Text {
          text: "Stoic Pulse"
          color: root.bar.foreground
          font.family: root.bar.fontFamily
          font.pixelSize: Style.font.title
          font.bold: true
          width: parent.width - stateLabel.implicitWidth - parent.spacing
        }

        Text {
          id: stateLabel
          text: root.notificationsEnabled ? "LIVE" : "PAUSED"
          color: root.notificationsEnabled ? Color.accent : Qt.darker(root.bar.foreground, 1.5)
          font.family: root.bar.fontFamily
          font.pixelSize: Style.font.caption
          font.bold: true
          anchors.verticalCenter: parent.verticalCenter
        }
      }

      PanelSeparator {
        foreground: root.bar.foreground
      }

      Text {
        width: parent.width
        text: root.currentQuote ? "“" + root.currentQuote.text + "”" : "Preparing a line…"
        color: root.bar.foreground
        font.family: root.bar.fontFamily
        font.pixelSize: Style.font.subtitle
        wrapMode: Text.WordWrap
        lineHeight: 1.25
      }

      Text {
        width: parent.width
        visible: root.currentQuote !== null
        text: root.currentQuote
          ? "— " + root.currentQuote.author + ", " + root.currentQuote.work + " · " + root.currentQuote.locator
          : ""
        color: Qt.darker(root.bar.foreground, 1.4)
        font.family: root.bar.fontFamily
        font.pixelSize: Style.font.caption
        wrapMode: Text.WordWrap
      }

      Text {
        width: parent.width
        text: root.scheduleText
        color: Qt.darker(root.bar.foreground, 1.3)
        font.family: root.bar.fontFamily
        font.pixelSize: Style.font.bodySmall
      }

      Row {
        width: parent.width
        spacing: Style.space(6)

        Button {
          text: "Send now"
          foreground: root.bar.foreground
          bordered: true
          focusable: true
          onClicked: root.sendNow()
        }

        Button {
          text: root.notificationsEnabled ? "Pause" : "Resume"
          foreground: root.bar.foreground
          selected: !root.notificationsEnabled
          bordered: true
          focusable: true
          onClicked: root.toggleNotifications()
        }
      }

      Text {
        text: "INTERVAL"
        color: Qt.darker(root.bar.foreground, 1.5)
        font.family: root.bar.fontFamily
        font.pixelSize: Style.font.caption
        font.bold: true
      }

      Row {
        width: parent.width
        spacing: Style.space(4)

        Repeater {
          model: [15, 30, 60, 120]

          Button {
            required property int modelData
            text: modelData < 60 ? modelData + "m" : (modelData / 60) + "h"
            foreground: root.bar.foreground
            selected: root.intervalMinutes === modelData
            bordered: true
            focusable: true
            onClicked: root.setInterval(modelData)
          }
        }
      }

      Text {
        width: parent.width
        text: "Left click opens · right click sends now · middle click pauses"
        color: Qt.darker(root.bar.foreground, 1.7)
        font.family: root.bar.fontFamily
        font.pixelSize: Style.font.caption
        wrapMode: Text.WordWrap
      }
    }
  }
}
