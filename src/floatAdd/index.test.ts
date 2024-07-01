import { floatAdd } from ".";

it('should add two positive numbers correctly',()=>{
    expect(floatAdd(0.1, 0.2)).toBe(0.3);
    expect(floatAdd(0.01, 0.02)).toBe(0.03);
    expect(floatAdd(1, 0.2)).toBe(1.2);
    expect(floatAdd(1, 1)).toBe(2);
})
it('should add two negative numbers correctly',()=>{
    expect(floatAdd(-0.1, -0.2)).toBe(-0.3);
})
it('should add a positive and a negative number correctly', () => {
    expect(floatAdd(1.5, -0.5)).toBe(1);
  });
it('should add a zero and a zero number correctly', () => {
    expect(floatAdd(0, 0)).toBe(0);
  });
  it('should add a zero and a positive number correctly',()=>{
    expect(floatAdd(0, 1)).toBe(1);
})
it('should add a zero and a positive number correctly',()=>{
    expect(floatAdd(0, 0.1)).toBe(0.1);
})
it('should add a zero and a negative number correctly',()=>{
    expect(floatAdd(0, -0.1)).toBe(-0.1);
})
