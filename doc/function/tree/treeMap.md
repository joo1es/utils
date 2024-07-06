---
outline: deep
---

# treeMap 树形映射

对树形数组进行映射。

## 函数定义

```typescript
function treeMap<
    T extends Record<keyof any, any>[],
    U extends (treeItem: TreeItem) => Record<keyof any, any>,
    TreeItem extends T extends (infer Item)[] ? Item : T,
>(
    tree: T,
    map: U,
    options?: Options
): ReturnType<U>[]
function treeMap<
    T extends Record<keyof any, any>,
    U extends (treeItem: TreeItem) => Record<keyof any, any>,
    TreeItem extends T extends (infer Item)[] ? Item : T
>(
    treeItem: T,
    map: U,
    options?: Options
): ReturnType<U>
function treeMap<
    T extends Record<keyof any, any> | Record<keyof any, any>[],
    U extends (treeItem: TreeItem) => Record<keyof any, any>,
    TreeItem extends T extends (infer Item)[] ? Item : T
>(
    treeOrTreeItem: T,
    map: U,
    options?: Options
): ReturnType<U>[] | ReturnType<U>
```

### 参数

`treeOrTreeItem` `Record<keyof any, any> | Record<keyof any, any>[]`

树节点或树

`map` `(treeItem: Record<keyof any, any>) => Record<keyof any, any>`

映射函数

`options` `{ childrenField?: string, targetChildrenField?: string }` `可选`

配置项，childrenField 为子节点字段，默认为 _children_，targetChildrenField 为映射后子节点字段，默认与 _childrenField_ 相同

### 返回值

`Record<keyof any, any> | Record<keyof any, any>[]` 完成映射后的树形

## 例子

```ts
import { treeMap } from '@oasis-end/utils'

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
// 结果
// {
//     nameMap: 'testName',
//     children: [
//         { nameMap: 'testName1' },
//         { nameMap: 'testName2' },
//         { nameMap: 'testName3', children: [ { nameMap: 'testName4' } ] }
//     ]
// }

interface TreeItem {
    name: string,
    children?: TreeItem[]
}

interface TreeItemMap {
    nameMap: string,
    children?: TreeItem[]
}
```

