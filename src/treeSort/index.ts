export function treeSort<T extends Record<keyof any, any>>(
    tree: T[],
    compareFn?: (a: T, b: T) => number,
    options?: { childrenField?: string }
) {
    const childrenField = options?.childrenField || 'children'

    function sort(tree: T[]): T[] {
        const targetTree = tree.map(treeItem => {
            const newItem = { ...treeItem }
            if (Array.isArray(newItem[childrenField]) && newItem[childrenField].length > 0) {
                newItem[childrenField as keyof T] = sort(newItem[childrenField]) as any
            }
            return newItem
        })

        targetTree.sort(compareFn)
        return targetTree
    }

    return sort(tree)
}