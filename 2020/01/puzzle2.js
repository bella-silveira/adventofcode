// const input = require("./input")

// const findNumbers = () => {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input.length; j++) {
//       for (let k = 0; k < input.length; k++) {
//         if (input[i] + input[j] + input[k] === 2020) {
//           return input[i] * input[j] * input[k]
//         }
//       }
//     }
//   }
// }

// console.log(findNumbers())

const input = require("./input")

const findNumbers = () => {
  const sumTarget = 2020
  const sortedInput = input.sort((a, b) => a - b)
  let left = 0
  let right = sortedInput.length - 1
  let sum = 0

  for(let i = 0; i < sortedInput.length - 2; i++) {
    left = i + 1
    right = sortedInput.length - 1
    sum = 0
    while (sum !== sumTarget) {
      sum = sortedInput[left] + sortedInput[right] + sortedInput[i]
  
      if (sum < sumTarget) {
        left++
      } else if (sum > sumTarget) {
        right--
      }
    }
    return sortedInput[i] * sortedInput[left] * sortedInput[right]
  }

}

console.log(findNumbers())

