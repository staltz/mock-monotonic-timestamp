const test = require('tape')
const ts = require('..')

const INAUGURATION = 1438787025000

test('first timestamp is the SSB inauguration date', (t) => {
  t.equals(ts(), INAUGURATION)
  t.end()
})

test('subsequent timestamps are spaced by 2 minutes', (t) => {
  t.equals(ts(), INAUGURATION + 120e3)
  t.equals(ts(), INAUGURATION + 120e3 + 120e3)
  t.equals(ts(), INAUGURATION + 120e3 + 120e3 + 120e3)
  t.equals(ts(), INAUGURATION + 120e3 + 120e3 + 120e3 + 120e3)
  t.equals(ts(), INAUGURATION + 120e3 + 120e3 + 120e3 + 120e3 + 120e3)
  t.end()
})

test('can be reset with .reset()', (t) => {
  ts.reset()
  t.equals(ts(), INAUGURATION)
  t.end()
})

