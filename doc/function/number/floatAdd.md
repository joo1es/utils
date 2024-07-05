---
outline: deep
---

# floatAdd 浮点相加

执行一次安全的浮点数相加，避免浮点数运算过程中可能产生的精度问题。

## 函数定义

```typescript
function floatAdd(...nums: number[]): number 
```

### 参数

`...nums` `number[]`

参与计算的元素，多个元素最终会被相加

### 返回值

`number` 计算的最终结果

## 例子

```ts
import { floatAdd } from '@oasis-end/utils'

floatAdd(0.1, 0.2) // 0.3
floatAdd(0.01, 0.02, -0.01) // 0.02
```

