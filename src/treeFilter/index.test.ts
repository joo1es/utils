import { treeFilter } from '.'

it('should sort return right result', () => {
    const treeItemMap = treeFilter([
        { name: 'testName2' },
        { name: 'testNam1' },
        { name: 'testNam3', children: [ { name: 'testName5' }, { name: 'testName4' } ] }
    ] as TreeItem[], treeItem => {
        return treeItem.name.startsWith('testName')
    })
    expect(treeItemMap).toEqual([
        { name: 'testName2' }
    ])
})

it('should sort return right result 2', () => {
    const treeItemMap = treeFilter([
        { name: 'testName2' },
        { name: 'testNam1' },
        { name: 'testNam3', childrenField: [ { name: 'testName5' }, { name: 'testName4' } ] }
    ] as TreeItem[], treeItem => {
        return treeItem.name.startsWith('testName')
    }, { childrenField: 'childrenField' })
    expect(treeItemMap).toEqual([
        { name: 'testName2' }
    ])
})

it('should clear empty children', () => {
    const treeItemMap = treeFilter([
        { name: 'testNae2' },
        { name: 'testNam1' },
        { name: 'testNam3', childrenField: [ { name: 'testNae5' }, { name: 'testNae4' } ] }
    ] as TreeItem[], treeItem => {
        return treeItem.name.startsWith('testNam')
    }, { childrenField: 'childrenField', clearEmptyChildren: true })
    expect(treeItemMap).toEqual([
        { name: 'testNam1' },
        { name: 'testNam3', childrenField: void 0 }
    ])
})

interface TreeItem {
    name: string,
    children?: TreeItem[]
}