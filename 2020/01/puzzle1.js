const input = require("./input")

const findNumbers = () => {
  const sumTarget = 2020
  const sortedInput = input.sort((a, b) => a - b)
  let left = 0
  let right = sortedInput.length - 1
  let sum = 0

  while (sum !== sumTarget) {
    sum = sortedInput[left] + sortedInput[right]

    if (sum < sumTarget) {
      left++
    } else if (sum > sumTarget) {
      right--
    }
  }

  return sortedInput[left] * sortedInput[right]
}

console.log(findNumbers())
