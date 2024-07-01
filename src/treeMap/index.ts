
/**
* Map properties for tree array.
*/
// case 1: tree items
export function treeMap<
    T extends Record<keyof any, any>[],
    U extends (treeItem: TreeItem) => Record<keyof any, any>,
    TreeItem extends T extends (infer Item)[] ? Item : T,
>(
    tree: T,
    map: U,
    options?: Options
): ReturnType<U>[]
// case 2: tree item
export function treeMap<
    T extends Record<keyof any, any>,
    U extends (treeItem: TreeItem) => Record<keyof any, any>,
    TreeItem extends T extends (infer Item)[] ? Item : T
>(
    treeItem: T,
    map: U,
    options?: Options
): ReturnType<U>
// all case
export function treeMap<
    T extends Record<keyof any, any> | Record<keyof any, any>[],
    U extends (treeItem: TreeItem) => Record<keyof any, any>,
    TreeItem extends T extends (infer Item)[] ? Item : T
>(
    treeOrTreeItem: T,
    map: U,
    options?: Options
): ReturnType<U>[] | ReturnType<U> {
    const childrenField = options?.childrenField || 'children'
    const targetChildrenField = options?.targetChildrenField || options?.childrenField || 'children'
    function treeMapFunction(item: TreeItem): ReturnType<U> {
        const result = map(item)
        if (item[childrenField] && Array.isArray(item[childrenField])) {
            result[targetChildrenField] = item[childrenField].map(treeMapFunction)
        }
        return result as ReturnType<U>
    }
    if (Array.isArray(treeOrTreeItem)) {
        return treeOrTreeItem.map(treeMapFunction)
    } else {
        return treeMapFunction(treeOrTreeItem as unknown as TreeItem)
    }
}

export interface Options {
    childrenField?: string,
    targetChildrenField?: string
}