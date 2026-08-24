# Stoic Pulse for Omarchy

Stoic Pulse is an offline Omarchy Quattro plugin that delivers a short line
from Marcus Aurelius or Epictetus at a configurable interval.

The plugin adds a small `Σ` control to the bar. Left click opens the current
line and interval controls, right click sends a line immediately, and middle
click pauses or resumes the schedule.

## Features

- Configurable notifications from every 5 minutes to once per day
- 44 bundled lines from public-domain George Long translations
- A shuffled rotation that shows every line before repeating one
- Pause, resume, send-now, and 15m/30m/1h/2h quick controls
- Optional notification immediately after login or a shell restart
- No accounts, telemetry, API keys, runtime downloads, or network requests

## Install

Omarchy plugins run as unsandboxed code inside `omarchy-shell`. Review this
repository, then install and enable it:

```bash
omarchy plugin add https://github.com/LiamBateman/omarchy-stoic-pulse.git --enable
```

The plugin ID is `io.github.liambateman.stoic-pulse`.

## Configure

Open the bar settings and select Stoic Pulse to set an exact interval, enable
or pause notifications, and choose whether a line should appear when the shell
starts. The defaults are one notification per hour, enabled, with no immediate
login notification.

The popup also offers 15-minute, 30-minute, one-hour, and two-hour presets.

## Runtime behavior and dependencies

Stoic Pulse is a Quickshell service and bar widget. It invokes the local
`notify-send` command from `libnotify` with a fixed argument array; quotations
are never passed through a shell. Omarchy includes the required Quickshell and
notification components. No additional packages, services, privileges, or
network access are required.

The rotation is held in memory. Restarting `omarchy-shell` starts a fresh
shuffle. Desktop do-not-disturb behavior is controlled by Omarchy's existing
notification service.

## Remove

```bash
omarchy plugin remove io.github.liambateman.stoic-pulse
```

## Sources and rights

The plugin code and original interface are MIT licensed. The bundled literary
lines come from public-domain George Long translations prepared by Standard
Ebooks. See [SOURCES.md](SOURCES.md) for editions, pinned source revisions, and
rights information.

## Development

```bash
node --test tests/model.test.mjs
omarchy plugin validate .
quickshell -p RuntimeSmoke.qml
```

For a live check, add the repository as a plugin, open the popup, exercise each
interval control, send a notification, restart the shell, and verify that the
schedule resumes.

## License

MIT. See [LICENSE](LICENSE).
