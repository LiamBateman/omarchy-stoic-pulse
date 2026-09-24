import QtQuick
import Quickshell

ShellRoot {
  id: root

  function entry(minutes, enabled) {
    return { id: "io.github.liambateman.stoic-pulse", intervalMinutes: minutes,
      notificationsEnabled: enabled, notifyOnStart: false }
  }

  function layout(minutes, enabled) {
    return { layout: { left: [], center: [], right: [entry(minutes, enabled)] } }
  }

  function check(condition, message) {
    if (!condition) throw new Error(message)
  }

  QtObject {
    id: scopedShell
    property var barConfig: root.layout(30, true)
  }

  QtObject {
    id: legacyShell
    property var shellConfig: ({ bar: root.layout(15, false), plugins: [] })
  }

  Service { id: pulse; shell: scopedShell }
  Service { id: legacyPulse; shell: legacyShell }

  property int phase: 0
  property var testTimer: null
  readonly property bool testNotifications: Quickshell.env("STOIC_PULSE_SMOKE_NOTIFICATIONS") === "1"

  Timer {
    interval: 60
    running: true
    repeat: true
    onTriggered: {
      try {
        switch (root.phase++) {
        case 0:
          root.check(pulse.currentQuote && pulse.currentQuote.text.length >= 20, "quotation missing")
          root.check(pulse.intervalMinutes === 30 && pulse.notificationsEnabled, "scoped settings ignored")
          root.check(pulse.nextNotificationAt > Date.now(), "schedule did not start")
          root.check(legacyPulse.intervalMinutes === 15 && !legacyPulse.notificationsEnabled,
            "legacy settings ignored")
          root.check(legacyPulse.nextNotificationAt === 0, "paused legacy schedule is running")
          var first = pulse.currentIndex
          pulse.selectNextQuote()
          root.check(pulse.currentIndex !== first, "quotation repeated")
          scopedShell.barConfig = root.layout(15, false)
          break
        case 1:
          root.check(pulse.intervalMinutes === 15 && !pulse.notificationsEnabled, "live settings ignored")
          root.check(pulse.nextNotificationAt === 0, "pause did not stop schedule")
          scopedShell.barConfig = root.layout(120, true)
          break
        case 2:
          root.check(pulse.intervalMinutes === 120 && pulse.notificationsEnabled, "resume settings ignored")
          root.check(pulse.nextNotificationAt - Date.now() > 119 * 60000, "resume did not restart schedule")
          pulse.restartSchedule()
          scopedShell.barConfig = root.layout(120, false)
          break
        case 3:
          root.check(pulse.nextNotificationAt === 0, "pause after restart did not stop schedule")
          if (!root.testNotifications) {
            console.info("Stoic Pulse settings and schedule smoke test passed")
            Qt.exit(0)
            return
          }
          // The Node test runner supplies a fake notify-send in PATH.
          pulse.currentQuote = { text: "A test <line> & literal shell $characters.", author: "Seneca",
            work: "On Peace of Mind", locator: "Chapter 17" }
          root.check(pulse.notifyNow(true), "manual notification rejected while paused")
          break
        case 4:
          root.check(pulse.lastError === "" && pulse.notificationCount === 1, "manual notification failed")
          root.check(pulse.nextNotificationAt === 0, "send-now resumed paused schedule")
          scopedShell.barConfig = root.layout(5, true)
          break
        case 5:
          // Accelerate the real QML timer without changing production interval limits.
          for (var i = 0; i < pulse.resources.length; i++) {
            if (pulse.resources[i].objectName === "scheduleTimer") root.testTimer = pulse.resources[i]
          }
          root.check(root.testTimer !== null, "schedule timer not found")
          root.testTimer.interval = 20
          break
        case 6:
          root.check(pulse.notificationCount > 1, "recurring timer did not send")
          scopedShell.barConfig = root.layout(5, false)
          break
        case 7:
          root.check(!root.testTimer.running && pulse.nextNotificationAt === 0, "recurring timer did not pause")
          root.check(pulse.lastError === "", "notification command failed")
          console.info("Stoic Pulse settings, schedule, and notification smoke test passed")
          Qt.exit(0)
          break
        }
      } catch (error) {
        console.error("Stoic Pulse smoke test:", error.message)
        Qt.exit(1)
      }
    }
  }

  Timer {
    interval: 5000
    running: true
    onTriggered: {
      console.error("Stoic Pulse smoke test timed out")
      Qt.exit(1)
    }
  }
}
