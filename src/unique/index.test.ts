import { unique } from "."

it('should return an array of unique values', () => {
    expect(unique([])).toEqual([])
    expect(unique([1, 1, 2])).toEqual([1, 2])
    expect(unique([1, 1, 2, 5, 5])).toEqual([1, 2, 5])
    expect(unique([1, 1, 2, 5, [1]])).toEqual([1, 2, 5, [1]])
})

it('should return an array of unique values with a key', () => {
    expect(unique([], 'id')).toEqual([])
    expect(unique([{ id: 1 }, { id: 1 }], 'id')).toEqual([{ id: 1 }])
    expect(unique([{ id: 3 }, { id: 1 }], 'id')).toEqual([{ id: 3 }, { id: 1 }])
    expect(unique([[0, 1, 2], [0, 1, 3]], item => item[0])).toEqual([[0, 1, 3]])
})

it('should return an array of unique values with a key function', () => {
    expect(unique([{ id: 1 }, { id: 1 }], item => item.id)).toEqual([{ id: 1 }])
    expect(unique([{ id: 1, name: 'a' }, { id: 1, name: 'b' }], item => item.id + item.name)).toEqual([{ id: 1, name: 'a' }, { id: 1, name: 'b' }])
    expect(unique([{ id: 1, name: 'a' }, { id: 1, name: 'b' }], item => item.id + item.name, item => item.name)).toEqual(['a', 'b'])
    expect(unique([{ id: 1, name: 'a' }, { id: 1, name: 'b' }], () => undefined)).toEqual([{ id: 1, name: 'b' }])
})