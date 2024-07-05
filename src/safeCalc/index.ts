import { floatAdd, countDecimals } from '../floatAdd'

export function safeCalc(...calcValues: (number | string | TemplateStringsArray)[]): number {
    return calcValues.reduce((result:number,item)=>{
        let currentItem = 0
        if(typeof item === 'string'){
            currentItem = expressCalc(item)
        }
        if(typeof item === 'number'){
            currentItem = floatAdd(item)
        }
        if(item instanceof Array){
            currentItem = item.reduce((result,item)=>{
                return result += expressCalc(item)
            },0)
        }
        return result += currentItem
    },0)
}

export function expressCalc(calcValues:string){
    let decimal = 1
    const tempMap:number[] = []
    const replaceValues = calcValues.replace(/(-?\d+\.(\d)*)|(-?\d+)/g,match=>{
        tempMap.push(Number(match))
        const maxDecimal = Math.max(...tempMap.map(countDecimals))
        decimal = Math.pow(10,maxDecimal)
        return `${Number(match)*Math.pow(10,decimal)}`
        })
    return eval(replaceValues)/decimal
}

