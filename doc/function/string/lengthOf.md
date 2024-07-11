---
outline: deep
---

# lengthOf 获取长度

正确的获取字符串的长度。

## 函数定义

```typescript
function lengthOf(value: string | any[] | Set<any> | Map<any, any>): number
```

### 参数

`value` `string | any[] | Set<any> | Map<any, any>`

值

### 返回值

`number` 值的长度

## 例子

```ts
import { lengthOf } from '@oasis-end/utils'

'😂'.length // 2
lengthOf('😂') // 1
```

