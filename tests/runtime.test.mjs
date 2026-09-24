import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { test } from "node:test"

const repo = path.resolve(import.meta.dirname, "..")

test("QML service follows scoped and legacy settings and delivers scheduled notifications", () => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "stoic-pulse-test-"))
  try {
    const calls = path.join(temporary, "calls.jsonl")
    fs.writeFileSync(path.join(temporary, "notify-send"), `#!/usr/bin/env python3
import json, os, sys
with open(os.environ["STOIC_PULSE_CALLS"], "a") as output:
    output.write(json.dumps(sys.argv[1:]) + "\\n")
`, { mode: 0o755 })
    const result = spawnSync("quickshell", ["-p", path.join(repo, "RuntimeSmoke.qml")], {
      encoding: "utf8", timeout: 10000,
      env: { ...process.env, PATH: `${temporary}:${process.env.PATH}`,
        QT_QPA_PLATFORM: "offscreen", QT_QPA_PLATFORMTHEME: "basic",
        XDG_RUNTIME_DIR: temporary, WAYLAND_DISPLAY: "",
        STOIC_PULSE_SMOKE_NOTIFICATIONS: "1", STOIC_PULSE_CALLS: calls }
    })
    assert.equal(result.status, 0, `${result.error || ""}\n${result.stdout}\n${result.stderr}`)
    const notifications = fs.readFileSync(calls, "utf8").trim().split("\n").map(JSON.parse)
    assert.ok(notifications.length >= 2, "manual and recurring notifications should both be delivered")
    assert.equal(notifications[0][3], "Stoic Pulse — Seneca")
    assert.equal(notifications[0][4], "A test <line> & literal shell $characters.\n\n— On Peace of Mind · Chapter 17 · Aubrey Stewart translation")
    for (const args of notifications) {
      assert.equal(args.length, 5)
      assert.equal(args[0], "--app-name=Stoic Pulse")
    }
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true })
  }
})
