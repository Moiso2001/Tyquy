

export function convertNumberToPrice(number: number){
    const numberDigits = number.toString().split('')

    if(numberDigits.length > 3){
        const millionDigit = Number(numberDigits[0])
        const hundredDigits = Number(numberDigits.splice(1).join(''))

        return `${millionDigit}.${hundredDigits}.000`
    }

    return `${Number(numberDigits.splice(0).join(''))}.000`
}
