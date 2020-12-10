const input = require("./input").split("\n").map(number => parseInt(number))

const findJoltPermutation = () => {
  const sortedAdapters = [0, ...input.sort((a, b) => a - b)]
  let permutations = {
    0: 1
  }

  for(let i = 1; i < sortedAdapters.length; i++) {
    const combinations = (permutations[sortedAdapters[i] - 1] || 0) + (permutations[sortedAdapters[i] - 2] || 0) +(permutations[sortedAdapters[i] - 3] || 0)
    
    permutations[sortedAdapters[i]] = combinations
  }

 return permutations[input[input.length - 1]]
}

console.log(findJoltPermutation())