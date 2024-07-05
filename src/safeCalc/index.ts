export function safeCalc(...calcValues: (number | string | TemplateStringsArray)[]): number {
    void calcValues
    return 0
}