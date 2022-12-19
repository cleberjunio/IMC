export function notANumber(value) {
    return isNaN(value) || value == ''

}

export function IMC(weigth, height) {

    return ((weigth) / (height / 100) ** 2).toFixed(2)

}