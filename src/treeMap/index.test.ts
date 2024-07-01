import { treeMap } from '.'

it('default childrenField', () => {
    const treeItemMap = treeMap({
        name: 'testName',
        children: [
            { name: 'testName1' },
            { name: 'testName2' },
            { name: 'testName3', children: [ { name: 'testName4' } ] }
        ]
    } as TreeItem, treeItem => {
        return {
            nameMap: treeItem.name
        } as TreeItemMap
    })
    expect(treeItemMap).toEqual({
        nameMap: 'testName',
        children: [
            { nameMap: 'testName1' },
            { nameMap: 'testName2' },
            { nameMap: 'testName3', children: [ { nameMap: 'testName4' } ] }
        ]
    })
})

it('childrenField === "childrenThing" && array tree', () => {
    const treeItemMap = treeMap([{
        name: 'testName',
        childrenThing: [
            { name: 'testName1' },
            { name: 'testName2' },
            { name: 'testName3', childrenThing: [ { name: 'testName4' } ] }
        ]
    } as TreeItemThing], treeItem => {
        return {
            nameMap: treeItem.name
        } as TreeItemThingMap
    }, { childrenField: 'childrenThing' })
    expect(treeItemMap).toEqual([{
        nameMap: 'testName',
        childrenThing: [
            { nameMap: 'testName1' },
            { nameMap: 'testName2' },
            { nameMap: 'testName3', childrenThing: [ { nameMap: 'testName4' } ] }
        ]
    }])
})

it('childrenField === "childrenThing" && targetChildrenField === "children"', () => {
    const treeItemMap = treeMap({
        name: 'testName',
        childrenThing: [
            { name: 'testName1' },
            { name: 'testName2' },
            { name: 'testName3', childrenThing: [ { name: 'testName4' } ] }
        ]
    } as TreeItemThing, treeItem => {
        return {
            nameMap: treeItem.name
        } as TreeItemMap
    }, { childrenField: 'childrenThing', targetChildrenField: 'children' })
    expect(treeItemMap).toEqual({
        nameMap: 'testName',
        children: [
            { nameMap: 'testName1' },
            { nameMap: 'testName2' },
            { nameMap: 'testName3', children: [ { nameMap: 'testName4' } ] }
        ]
    })
})

interface TreeItem {
    name: string,
    children?: TreeItem[]
}

interface TreeItemMap {
    nameMap: string,
    children?: TreeItem[]
}

interface TreeItemThing {
    name: string,
    childrenThing?: TreeItemThing[]
}

interface TreeItemThingMap {
    nameMap: string,
    childrenThing?: TreeItemThingMap[]
}