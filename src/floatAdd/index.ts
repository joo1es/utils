export function floatAdd(num1: number, num2: number): number {
    if(num1===undefined){
        num1=0
    }
    if(num2===undefined){
       num2 = 0
    }
    const maxDecimals = Math.max(countDecimals(num1), countDecimals(num2))
    const precision = 1*Math.pow(10,maxDecimals)
    return ((num1*precision)+(num2*precision))/precision
 }

 function countDecimals(num:number){
    // 是整数就返回0
    if(num%1===0) return 0
    return num.toString().split('.')[1].length
 }