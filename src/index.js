module.exports = function reverse (n) {
    let newArg = Math.abs(n)
    let arr = newArg.toString()
    let newArr = arr.split('').reverse().join('')
    return Number(newArr)
}
