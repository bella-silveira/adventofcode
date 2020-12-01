const input = require("./input")

const findNumbers = () => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        return input[i] * input[j]
      }
    }
  }
}

console.log(findNumbers())
