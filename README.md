The end of the oasis is still an oasis. There are some useful utils.

## floatAdd

Avoiding precision problems when adding float numbers.

```typescript
import { floatAdd } from '@oasis-end/utils'

floatAdd(0.1, 0.2) // the result is 0.3
0.1 + 0.2 // the result is 0.30000000000000004
```

## unique

High-performance array unique.

```typescript
import { unique } from '@oasis-end/utils'

unique([1, 2, 1, 2]) // the result is [1, 2]
unique([
    { id: 1 }, { id: 2 },
    { id: 1 }, { id: 2 }
], 'id') // the result is [{ id: 1 }, { id: 2 }]
unique([
    { id: 1 }, { id: 2 },
    { id: 1 }, { id: 2 }
], item => item.id) // the result is [{ id: 1 }, { id: 2 }]
```

## treeMap

Map properties for tree array.

```typescript
import { treeMap } from '@oasis-end/utils'

unique([
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D', children: [ { name: 'E' } ] }
], (item) => {
    return { name: `${item.name} is my name` }
})
// the result is
// [
//     { name: 'A is my name' },
//     { name: 'B is my name' },
//     { name: 'C is my name' },
//     { name: 'D is my name', children: [ { name: 'E is my name' } ] }
// ]
```