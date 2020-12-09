const input = require("./input").split("\n").map(number => parseInt(number))

const isNumberValid = (number, array) => {
  for (let i = 0; i < array.length; i++) {
    const rest = number > array[i] ? number - array[i] : array[i] - number
    
    if (array.includes(rest)) {
      return true
    }
  }

  return false
}

const findBreakingNumber = () => {
  const preamble = 25
  let invalidNumber = 0
  let i = preamble

  while(invalidNumber === 0) {
    const currentNumber = input[i]

    if(!isNumberValid(currentNumber, input.slice(i - preamble, i))) {
      invalidNumber = currentNumber
    }
    
    i++
  }

  return invalidNumber
}

console.log(findBreakingNumber())

module.exports = findBreakingNumber

