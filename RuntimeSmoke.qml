import QtQuick
import Quickshell

ShellRoot {
  QtObject {
    id: fakeShell
    property var shellConfig: ({
      bar: {
        layout: {
          left: [],
          center: [],
          right: [{
            id: "io.github.liambateman.stoic-pulse",
            intervalMinutes: 30,
            notificationsEnabled: true,
            notifyOnStart: false
          }]
        }
      },
      plugins: []
    })
  }

  Service {
    id: pulse
    shell: fakeShell
    autoTick: false
  }

  Timer {
    interval: 0
    running: true
    onTriggered: {
      if (!pulse.currentQuote || pulse.currentQuote.text.length < 20) {
        console.error("Stoic Pulse smoke test did not load a quotation")
        Qt.exit(1)
        return
      }
      if (pulse.intervalMinutes !== 30 || !pulse.notificationsEnabled) {
        console.error("Stoic Pulse smoke test did not read settings")
        Qt.exit(1)
        return
      }
      var first = pulse.currentIndex
      pulse.selectNextQuote()
      if (pulse.currentIndex === first) {
        console.error("Stoic Pulse smoke test repeated a quotation")
        Qt.exit(1)
        return
      }
      console.info("Stoic Pulse smoke test passed with", pulse.currentQuote.author)
      Qt.exit(0)
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
