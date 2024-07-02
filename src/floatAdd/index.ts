export function floatAdd(...nums: number[]): number {
    if (nums.length === 0) return 0
    const maxDecimals = Math.max(...nums.map(countDecimals))
    const precision = 1 * Math.pow(10, maxDecimals)
    return nums.reduce((pre, cur) => {
        if (cur === undefined || !isFinite(cur) || isNaN(cur)) cur = 0
        return ((pre * precision) + (cur * precision)) / precision
    }, 0)
}

export function countDecimals(num: number) {
    // 是整数就返回0
    if (num % 1 === 0 || !isFinite(num) || isNaN(num)) return 0
    const numString = num.toString()
    if (numString.includes('e')) {
        const decimals = Number(numString.split('e')[1])
        return decimals < 0 ? - decimals : 0
    } else {
        return num.toString().split('.')[1]?.length || 0
    }
}