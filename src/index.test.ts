import { A, pipe } from '.'

test('should import', () => {
  const a = pipe(1, A.of)
  expect(a).toEqual([1])
})
