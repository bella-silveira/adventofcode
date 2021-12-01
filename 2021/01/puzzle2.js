const input = require("./input").split("\n").map(number => parseInt(number))

const countIncreases = () => {
  let countIncreased = 0;
  for (let i = 0; i < input.length; i++) {
    if (!input[i + 1] || !input[i + 2] || !input[i + 3]) {
      return countIncreased;
    }
    const currentWindow = input[i] + input[i + 1] + input[i + 2];
    const nextWindow = input[i + 1] + input[i + 2] + input[i + 3];
    if (nextWindow > currentWindow) {
      countIncreased++;
    }
  }
  return countIncreased;
}

console.log(countIncreases())
