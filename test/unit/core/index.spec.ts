import { add, sub } from '@boilerplate/core'

describe('core idnex.ts', () => {
  it('add func should be work', () => {
    expect(add(1, 2)).toBe(3)
  })
  it('sub func should be work', () => {
    expect(sub(2, 1)).toBe(1)
  })
})
