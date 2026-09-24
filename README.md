# Stoic Pulse for Omarchy

Stoic Pulse is an offline Omarchy Quattro plugin that delivers a short line
from Marcus Aurelius, Epictetus, or Seneca at a configurable interval.

The plugin adds a small `Σ` control to the bar. Left click opens the current
line and interval controls, right click sends a line immediately, and middle
click pauses or resumes the schedule.

## Features

- Configurable notifications from every 5 minutes to once per day
- 100 bundled lines from public-domain George Long and Aubrey Stewart translations
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

## Update

```bash
omarchy plugin update io.github.liambateman.stoic-pulse
omarchy restart shell
```

A shell restart loads the updated notification service because it is kept alive
across plugin reloads. Your interval and notification preferences are preserved.

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

## Troubleshooting

If pulses stop appearing, check desktop Do Not Disturb first:

```bash
omarchy-shell notifications dndState
omarchy-shell io.github.liambateman.stoic-pulse status
```

Do Not Disturb suppresses Stoic Pulse notifications. Turn it off in Omarchy's
notification controls when you want notifications to appear again. Stoic Pulse
respects this desktop-wide preference.

The status command reports service availability, interval, enabled state,
notification attempts, the next scheduled time (Unix milliseconds), and the
last notification error. Right click the `Σ` control to test delivery. Version
1.1.0 fixes settings changes being ignored on newer Omarchy shells.

## Remove

```bash
omarchy plugin remove io.github.liambateman.stoic-pulse
```

## Sources and rights

The plugin code and original interface are MIT licensed. The bundled literary
lines come from public-domain George Long and Aubrey Stewart translations
prepared by Standard Ebooks. See [SOURCES.md](SOURCES.md) for pinned editions and
rights information.

## Development

```bash
node --test tests/*.test.mjs
omarchy plugin validate .
quickshell -p RuntimeSmoke.qml
```

The automated runtime test requires Quickshell and Python 3. It runs offscreen
with a fake `notify-send`, exercising actual QML timers without desktop toasts.
The standalone smoke check tests settings and scheduling without sending a line.

To verify the bank against local checkouts of the revisions in `SOURCES.md`:

```bash
python tests/verify-sources.py /path/to/standardebooks-checkouts
```

For a live check, add the repository as a plugin, open the popup, exercise each
interval control, send a notification, restart the shell, and verify that the
schedule resumes.

## License

MIT. See [LICENSE](LICENSE).
