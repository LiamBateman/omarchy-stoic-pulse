import QtQuick
import Quickshell
import Quickshell.Io
import "Model.js" as Model

Item {
  id: root

  visible: false
  width: 0
  height: 0

  property var shell: null
  property var manifest: null
  property bool autoTick: true

  readonly property string pluginId: "io.github.liambateman.stoic-pulse"
  readonly property var settings: settingsEntry()
  readonly property int intervalMinutes: Model.intervalMinutes(settings.intervalMinutes)
  readonly property bool notificationsEnabled: Model.boolSetting(settings.notificationsEnabled, true)
  readonly property bool notifyOnStart: Model.boolSetting(settings.notifyOnStart, false)

  property var quoteBag: []
  property int currentIndex: -1
  property var currentQuote: null
  property int notificationCount: 0
  property double lastNotificationAt: 0
  property double nextNotificationAt: 0
  property string lastError: ""
  property bool initialStartHandled: false

  function settingsEntry() {
    var config = shell && shell.shellConfig ? shell.shellConfig : null
    if (!config) return ({})

    var layout = config.bar && config.bar.layout ? config.bar.layout : null
    var sections = ["left", "center", "right"]
    if (layout) {
      for (var s = 0; s < sections.length; s++) {
        var entries = layout[sections[s]]
        if (!Array.isArray(entries)) continue
        for (var i = 0; i < entries.length; i++) {
          if (entries[i] && String(entries[i].id || "") === pluginId) return entries[i]
        }
      }
    }

    var plugins = Array.isArray(config.plugins) ? config.plugins : []
    for (var p = 0; p < plugins.length; p++) {
      if (plugins[p] && String(plugins[p].id || "") === pluginId) return plugins[p]
    }
    return ({})
  }

  function selectNextQuote() {
    var bag = quoteBag && quoteBag.length ? quoteBag.slice() : Model.shuffledIndices(currentIndex)
    currentIndex = bag.shift()
    quoteBag = bag
    currentQuote = Model.quoteAt(currentIndex)
    return currentQuote
  }

  function ensureQuote() {
    return currentQuote || selectNextQuote()
  }

  function scheduleNext() {
    nextNotificationAt = scheduleTimer.running
      ? Date.now() + intervalMinutes * 60 * 1000
      : 0
  }

  function restartSchedule() {
    if (!scheduleTimer.running) {
      nextNotificationAt = 0
      return
    }
    scheduleTimer.restart()
    scheduleNext()
  }

  function notifyNow(resetSchedule) {
    if (notificationProcess.running) return false

    var quote = notificationCount === 0 ? ensureQuote() : selectNextQuote()
    if (!quote) {
      lastError = "No bundled quotations are available."
      return false
    }

    var source = quote.work + " · " + quote.locator + " · George Long translation"
    notificationProcess.command = [
      "notify-send",
      "--app-name=Stoic Pulse",
      "--urgency=normal",
      "--expire-time=18000",
      "Stoic Pulse — " + quote.author,
      quote.text + "\n\n— " + source
    ]
    notificationProcess.running = true
    notificationCount += 1
    lastNotificationAt = Date.now()
    lastError = ""

    if (resetSchedule !== false) restartSchedule()
    else scheduleNext()
    return true
  }

  function handleInitialStart() {
    if (initialStartHandled || !shell) return
    initialStartHandled = true
    ensureQuote()
    if (autoTick && notificationsEnabled && notifyOnStart) notifyNow(true)
    else scheduleNext()
  }

  Process {
    id: notificationProcess
    onExited: function(exitCode) {
      if (exitCode !== 0) root.lastError = "notify-send exited with status " + exitCode + "."
    }
  }

  Timer {
    id: scheduleTimer
    interval: root.intervalMinutes * 60 * 1000
    running: root.autoTick && root.notificationsEnabled && root.shell !== null
    repeat: true
    triggeredOnStart: false
    onRunningChanged: root.scheduleNext()
    onIntervalChanged: root.restartSchedule()
    onTriggered: root.notifyNow(false)
  }

  onNotificationsEnabledChanged: restartSchedule()
  onShellChanged: Qt.callLater(handleInitialStart)

  Component.onCompleted: {
    ensureQuote()
    Qt.callLater(handleInitialStart)
  }
}
