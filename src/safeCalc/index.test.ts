import { safeCalc } from '.'

it('should correctly use String and TemplateStringsArray', () => {
    expect(safeCalc('0.1 + 0.2')).toBe(0.3)
    expect(safeCalc`0.1 + 0.2`).toBe(0.3)
    expect(safeCalc('-0.1 + 0.2', 0.2)).toBe(0.3)
    expect(safeCalc('0.01 + 0.02')).toBe(0.03)
    expect(safeCalc('0.01 + 0.02 - 0.01')).toBe(0.01)
    expect(safeCalc(0.01, '0.02 - 0.01')).toBe(0.01)
    expect(safeCalc(0.01, '0.02 - 0.01', 0)).toBe(0.01)
    expect(safeCalc('(0.01 + 0.02 - 0.01) * 5')).toBe(0.05)
    expect(safeCalc('(0.01 + 0.02 - 0.01) * 5 / 5', .5, .5)).toBe(1.01)
    expect(safeCalc(safeCalc`0.1 + 0.2`, .2)).toBe(0.5)
})
it('should add two positive numbers correctly', () => {
    expect(safeCalc(0.1, 0.2)).toBe(0.3)
    expect(safeCalc(0.01, 0.02)).toBe(0.03)
    expect(safeCalc(1, 0.2)).toBe(1.2)
    expect(safeCalc(1, 1)).toBe(2)

    expect(safeCalc(0.1, 0.2, 0.3)).toBe(0.6)
    expect(safeCalc(0.1, 0.2, 0.3, 0.4)).toBe(1)
})
it('should add two negative numbers correctly', () => {
    expect(safeCalc(-0.1, -0.2)).toBe(-0.3)
    expect(safeCalc(-0.1, -0.2, -0.3)).toBe(-0.6)
})
it('should add a positive and a negative number correctly', () => {
    expect(safeCalc(1.5, -0.5)).toBe(1)
    expect(safeCalc(1.5, -0.5, -0.5)).toBe(0.5)
})
it('should add a zero and a zero number correctly', () => {
    expect(safeCalc(0, 0)).toBe(0)
    expect(safeCalc(0, 0, 0)).toBe(0)
})
it('should add a zero and a positive number correctly', () => {
    expect(safeCalc(0, 1)).toBe(1)
    expect(safeCalc(0, 1, 0)).toBe(1)
})
it('should add a zero and a positive number correctly', () => {
    expect(safeCalc(0, 0.1)).toBe(0.1)
    expect(safeCalc(0, 0.1, 0)).toBe(0.1)
})
it('should add a zero and a negative number correctly', () => {
    expect(safeCalc(0, -0.1)).toBe(-0.1)
    expect(safeCalc(0, -0.1, 0)).toBe(-0.1)
})
