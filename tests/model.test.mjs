import assert from "node:assert/strict"
import fs from "node:fs"
import vm from "node:vm"

const source = fs.readFileSync(new URL("../Model.js", import.meta.url), "utf8")
const context = vm.createContext({ Math, Number, String, isFinite })
vm.runInContext(source, context)

assert.equal(context.quoteCount(), 100, "the bundled rotation should contain 100 lines")
assert.equal(context.intervalMinutes(undefined), 60)
assert.equal(context.intervalMinutes(1), 5)
assert.equal(context.intervalMinutes(5000), 1440)
assert.equal(context.boolSetting(undefined, true), true)
assert.equal(context.boolSetting("false", true), false)
assert.equal(context.intervalLabel(60), "Every 1 hour")
assert.equal(context.intervalLabel(1440), "Every day")

const authorCounts = { "Marcus Aurelius": 0, Epictetus: 0, Seneca: 0 }
const seenTexts = new Set()

for (let i = 0; i < context.quoteCount(); i += 1) {
  const quote = context.quoteAt(i)
  assert.ok(quote.text.length >= 20)
  assert.ok(quote.author in authorCounts)
  assert.ok(quote.work.length > 0)
  assert.ok(quote.locator.length > 0)
  assert.equal(context.quoteSource(quote), `${quote.work} · ${quote.locator} · ${quote.author === "Seneca" ? "Aubrey Stewart" : "George Long"} translation`)
  assert.equal(seenTexts.has(quote.text), false, `duplicate line: ${quote.text}`)
  seenTexts.add(quote.text)
  authorCounts[quote.author] += 1
}

assert.deepEqual(authorCounts, { "Marcus Aurelius": 55, Epictetus: 25, Seneca: 20 })

for (let attempt = 0; attempt < 100; attempt += 1) {
  const order = context.shuffledIndices(0)
  assert.equal(order.length, context.quoteCount())
  assert.equal(new Set(order).size, context.quoteCount())
  assert.notEqual(order[0], 0)
}

console.log(`Model tests passed with ${context.quoteCount()} public-domain lines`)
