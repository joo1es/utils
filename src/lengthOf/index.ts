export function lengthOf(value: string | any[] | Set<any> | Map<any, any>): number {
    if (Array.isArray(value)) {
        return value.length
    } else if (value instanceof Set || value instanceof Map) {
        return value.size
    } else if (typeof value === 'string') {
        return value.match(/./gu)?.length || 0
    }
    return 0
}