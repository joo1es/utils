---
outline: deep
---

# safeCalc 安全计算

以一种安全的方式执行字符串内的运算，避免浮点数运算过程中可能产生的精度问题。

## 函数定义

```typescript
safeCalc(...calcValues: (number | string | TemplateStringsArray)[])
```

### 参数

`...calcValues` `(number | string | TemplateStringsArray)[]`

参与计算的元素，多个元素最终会被相加

### 返回值

`number` 计算的最终结果

## 例子

```ts
import { safeCalc } from '@oasis-end/utils'

safeCalc('0.1 + 0.2') // 0.3
safeCalc`0.1 + 0.2` // 0.3
safeCalc('(0.01 + 0.02 - 0.01) * 5') // 0.05
safeCalc('(0.01 + 0.02 - 0.01) * 5 / 5', .5, .5) // 1.01
```

