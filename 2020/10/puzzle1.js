const input = require("./input").split("\n").map(number => parseInt(number))

const getJoltAdapterDifference = () => {
  const sortedAdapters = [0, ...input.sort((a, b) => a - b)]
  let singleJoltDifferences = 0
  let threeJoltDifferences = 1

  for(let i = 0; i < sortedAdapters.length; i++) {
    if((sortedAdapters[i + 1] - sortedAdapters[i]) === 1) {
        singleJoltDifferences++
    } else if((sortedAdapters[i + 1] - sortedAdapters[i]) === 3) {
        threeJoltDifferences++
    }
  }

  return singleJoltDifferences * threeJoltDifferences
}

console.log(getJoltAdapterDifference())

