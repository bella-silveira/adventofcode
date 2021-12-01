const input = require("./input").split("\n").map(number => parseInt(number))

const countIncreases = () => {
  let countIncreased = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i + 1] > input[i]) {
      countIncreased++;
    }
  }
  return countIncreased;
}

console.log(countIncreases())
