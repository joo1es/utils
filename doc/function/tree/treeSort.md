---
outline: deep
---

# treeSort 树形排序

对树形数组进行排序。

## 函数定义

```typescript
function treeSort<T extends Record<keyof any, any>>(
    tree: T[],
    compareFn?: (a: T, b: T) => number,
    options?: { childrenField?: string }
): T[]
```

### 参数

`tree` `Record<keyof any, any>[]`

树

`compareFn` `(a: T, b: T) => number` `可选`

比较函数

`options` `{ childrenField?: string }` `可选`

配置项，childrenField 为子节点字段

### 返回值

`Record<keyof any, any>[]` 完成排序后的树形

## 例子

```ts
import { treeSort } from '@oasis-end/utils'

const treeItemMap = treeMap([
    { name: 'testName2' },
    { name: 'testName1' },
    { name: 'testName3', children: [ { name: 'testName5' }, { name: 'testName4' } ] }
] as TreeItem[], (a, b) => {
    return a.name.localeCompare(b.name)
})
// 结果
// [
//     { name: 'testName1' },
//     { name: 'testName2' },
//     { name: 'testName3', children: [ { name: 'testName4' }, { name: 'testName5' } ] }
// ]

interface TreeItem {
    name: string,
    children?: TreeItem[]
}
```

