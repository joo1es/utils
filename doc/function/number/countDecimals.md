---
outline: deep
---

# countDecimals 小数位数

获取一个数字的小数位数。

## 函数定义

```typescript
function countDecimals(num: number): number
```

### 参数

`num` `number`

数字

### 返回值

`number` 数字的小数位数

## 例子

```ts
import { countDecimals } from '@oasis-end/utils'

countDecimals(0.1) // 1
countDecimals(0) // 0
```

