export function treeFilter<T extends Record<keyof any, any>>(
    tree: T[],
    filterFn: (treeItem: T) => boolean,
    options?: { childrenField?: string, clearEmptyChildren?: boolean }
) {
    const childrenField = options?.childrenField || 'children'

    function filter(tree: T[]): T[] {
        const targetTree = tree.map(treeItem => {
            const newItem = { ...treeItem }
            if (Array.isArray(newItem[childrenField]) && newItem[childrenField].length > 0) {
                const filterItems = filter(newItem[childrenField]) as any
                newItem[childrenField as keyof T] = options?.clearEmptyChildren && filterItems.length === 0 ? void 0 : filterItems
            }
            return newItem
        })

        return targetTree.filter(treeItem => {
            return filterFn(treeItem)
        })
    }

    return filter(tree)
}