export function unique<T>(array: T[]): T[]
export function unique<
    T extends Record<keyof any, any>,
    U extends keyof T | ((item: T) => any)
>(
    array: T[],
    key: U,
    map?: ((item: T, i: number, key: U extends ((item: T) => any) ? ReturnType<U> : U extends string ? T[U] : never) => any)
): T[]
export function unique<T>(array: T[], key?: keyof T | ((item: T) => any), map?: ((item: T, i: number, key: any) => any)): T[] {
    if (key) {
        const newMap = new Map<any, T>()
        for (let i = 0; i < array.length; i++) {
            const item = array[i] as Record<keyof any, any>
            const keyValue = typeof key === 'function' ? key(item) : item[key]
            newMap.set(keyValue, map ? map(item, i, keyValue) : item)
        }
        return [...newMap.values()]
    } else {
        return [...new Set(array)]
    }
}