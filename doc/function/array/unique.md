---
outline: deep
---

# unique 去重

使用 Set 和 Map 对象对数组进行高效去重。

## 函数定义

```typescript
function unique<T>(array: T[]): T[]
function unique<
    T extends Record<keyof any, any>,
    U extends keyof T | ((item: T) => any)
>(
    array: T[],
    key: U,
    map?: ((item: T, i: number, key: U extends ((item: T) => any) ? ReturnType<U> : U extends string ? T[U] : never) => any)
): T[]
function unique<T>(array: T[], key?: keyof T | ((item: T) => any), map?: ((item: T, i: number, key: any) => any)): T[]
```

### 参数

`array` `Record<keyof any, any>[]`

需要去重的数组

`key` `keyof any | ((item: Record<keyof any, any>) => any)` `可选`

用于去重的键或获取键的函数

`map` `(item: Record<keyof any, any>) => any` `可选`

映射函数，可以在去重时进行映射

### 返回值

`Record<keyof any, any>[]` 去重后的数组

## 例子

```ts
import { unique } from '@oasis-end/utils'

unique([1, 1, 1, 2, 2, 2]) // [1, 2]
unique([{ key: 1 }, { key: 1 }, { key: 2 }, { key: 2 }], 'key')
// [{ key: 1 }, { key: 2 }]
```

