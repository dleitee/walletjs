import Map from '../src/helpers/map'

test('return new Map', () => {
  expect(new Map()).toMatchObject({})
})

test('return new Map with initialValue', () => {
  const map = new Map({ a: 1 })
  expect(map.get('a')).toBe(1)
})

test('return new Map with setted value', () => {
  const map = new Map()
  expect(map.set('a', 1).get('a')).toBe(1)
})

test('test immutability', () => {
  const map = new Map()
  const a = map.set('a', 1)
  const b = a.set('b', 2)
  expect(a.get('a')).toBe(1)
  expect(a.get('b')).toBe(undefined)
  expect(b.get('a')).toBe(1)
  expect(b.get('b')).toBe(2)
})
