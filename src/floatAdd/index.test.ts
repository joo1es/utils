import { floatAdd, countDecimals } from "."

it('should add two positive numbers correctly', () => {
    expect(floatAdd(0.1, 0.2)).toBe(0.3);
    expect(floatAdd(0.01, 0.02)).toBe(0.03);
    expect(floatAdd(1, 0.2)).toBe(1.2);
    expect(floatAdd(1, 1)).toBe(2);

    expect(floatAdd(0.1, 0.2, 0.3)).toBe(0.6);
    expect(floatAdd(0.1, 0.2, 0.3, 0.4)).toBe(1);
})
it('should add two negative numbers correctly', () => {
    expect(floatAdd(-0.1, -0.2)).toBe(-0.3);
    expect(floatAdd(-0.1, -0.2, -0.3)).toBe(-0.6);
})
it('should add a positive and a negative number correctly', () => {
    expect(floatAdd(1.5, -0.5)).toBe(1);
    expect(floatAdd(1.5, -0.5, -0.5)).toBe(0.5);
});
it('should add a zero and a zero number correctly', () => {
    expect(floatAdd(0, 0)).toBe(0);
    expect(floatAdd(0, 0, 0)).toBe(0);
});
it('should add a zero and a positive number correctly', () => {
    expect(floatAdd(0, 1)).toBe(1);
    expect(floatAdd(0, 1, 0)).toBe(1);
})
it('should add a zero and a positive number correctly', () => {
    expect(floatAdd(0, 0.1)).toBe(0.1);
    expect(floatAdd(0, 0.1, 0)).toBe(0.1);
})
it('should add a zero and a negative number correctly', () => {
    expect(floatAdd(0, -0.1)).toBe(-0.1);
    expect(floatAdd(0, -0.1, 0)).toBe(-0.1);
})

it('test countDecimals', () => {
    expect(countDecimals(0.001)).toBe(3)
    expect(countDecimals(1)).toBe(0)
    expect(countDecimals(1e-5)).toBe(5)
    expect(countDecimals(1e-20)).toBe(20)
    expect(countDecimals(1e+20)).toBe(20)
    expect(countDecimals(Infinity)).toBe(0)
    expect(countDecimals(NaN)).toBe(0)
    expect(countDecimals(-Infinity)).toBe(0)
})
