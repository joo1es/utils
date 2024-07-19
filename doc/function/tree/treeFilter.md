---
outline: deep
---

# treeFilter 树形过滤

对树形数组进行过滤。

## 函数定义

```typescript
function treeFilter<T extends Record<keyof any, any>>(
    tree: T[],
    filterFn: (treeItem: T) => boolean,
    options?: { childrenField?: string, clearEmptyChildren?: boolean }
): T[]
```

### 参数

`tree` `Record<keyof any, any>[]`

树

`filterFn` `(treeItem: T) => boolean`

比较函数

`options` `{ childrenField?: string, clearEmptyChildren: boolean }` `可选`

配置项，childrenField 为子节点字段，clearEmptyChildren 为是否清理长度为空的 children

### 返回值

`Record<keyof any, any>[]` 完成筛选后的树形

## 例子

```ts
import { treeFilter } from '@oasis-end/utils'

treeFilter([
    { name: 'testName2' },
    { name: 'testNam1' },
    { name: 'testNam3', children: [ { name: 'testName5' }, { name: 'testName4' } ] }
] as TreeItem[], treeItem => {
    return treeItem.name.startsWith('testName')
})
// 结果
// [
//     { name: 'testName2' }
// ]

interface TreeItem {
    name: string,
    children?: TreeItem[]
}
```

