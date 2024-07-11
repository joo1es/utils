import { getLength } from '.'

it('get length correctly', () => {
    expect(getLength('Aa')).toBe(2)
    expect(getLength(['A', 'a'])).toBe(2)
    expect(getLength(new Set(['A', 'a']))).toBe(2)
    const map = new Map<string, string>()
    map.set('A', 'A')
    expect(getLength(map)).toBe(1)
    expect(getLength('😂')).toBe(1)
    expect(getLength('😂😂😂😂😂😂')).toBe(6)
})