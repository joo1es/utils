import { treeSort } from '.'

it('should sort return right result', () => {
    const treeItemMap = treeSort([
        { name: 'testName2' },
        { name: 'testName1' },
        { name: 'testName3', children: [ { name: 'testName5' }, { name: 'testName4' } ] }
    ] as TreeItem[], (a, b) => {
        return a.name.localeCompare(b.name)
    })
    expect(treeItemMap).toEqual([
        { name: 'testName1' },
        { name: 'testName2' },
        { name: 'testName3', children: [ { name: 'testName4' }, { name: 'testName5' } ] }
    ])
})

it('should sort return right result 2', () => {
    const treeItemMap = treeSort([
        { name: 'testName2' },
        { name: 'testName1' },
        { name: 'testName3', childrenField: [ { name: 'testName5' }, { name: 'testName4' } ] }
    ] as TreeItem[], (a, b) => {
        return a.name.localeCompare(b.name)
    }, { childrenField: 'childrenField' })
    expect(treeItemMap).toEqual([
        { name: 'testName1' },
        { name: 'testName2' },
        { name: 'testName3', childrenField: [ { name: 'testName4' }, { name: 'testName5' } ] }
    ])
})

interface TreeItem {
    name: string,
    children?: TreeItem[]
}