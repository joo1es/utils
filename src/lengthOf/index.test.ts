import { lengthOf } from '.'

it('get length correctly', () => {
    expect(lengthOf('Aa')).toBe(2)
    expect(lengthOf(['A', 'a'])).toBe(2)
    expect(lengthOf(new Set(['A', 'a']))).toBe(2)
    const map = new Map<string, string>()
    map.set('A', 'A')
    expect(lengthOf(map)).toBe(1)
    expect(lengthOf('😂')).toBe(1)
    expect(lengthOf('😂😂😂😂😂😂')).toBe(6)
})