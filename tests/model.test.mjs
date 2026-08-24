import assert from "node:assert/strict"
import fs from "node:fs"
import vm from "node:vm"

const source = fs.readFileSync(new URL("../Model.js", import.meta.url), "utf8")
const context = vm.createContext({ Math, Number, String, isFinite })
vm.runInContext(source, context)

assert.ok(context.quoteCount() >= 40, "the bundled rotation should contain at least 40 lines")
assert.equal(context.intervalMinutes(undefined), 60)
assert.equal(context.intervalMinutes(1), 5)
assert.equal(context.intervalMinutes(5000), 1440)
assert.equal(context.boolSetting(undefined, true), true)
assert.equal(context.boolSetting("false", true), false)
assert.equal(context.intervalLabel(60), "Every 1 hour")
assert.equal(context.intervalLabel(1440), "Every day")

for (let i = 0; i < context.quoteCount(); i += 1) {
  const quote = context.quoteAt(i)
  assert.ok(quote.text.length >= 20)
  assert.ok(quote.author === "Marcus Aurelius" || quote.author === "Epictetus")
  assert.ok(quote.work.length > 0)
  assert.ok(quote.locator.length > 0)
}

for (let attempt = 0; attempt < 100; attempt += 1) {
  const order = context.shuffledIndices(0)
  assert.equal(order.length, context.quoteCount())
  assert.equal(new Set(order).size, context.quoteCount())
  assert.notEqual(order[0], 0)
}

console.log(`Model tests passed with ${context.quoteCount()} public-domain lines`)
