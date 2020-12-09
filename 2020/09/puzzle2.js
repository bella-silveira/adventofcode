const findBreakingNumber = require("./puzzle1")
const input = require("./input").split("\n").map(number => parseInt(number))

const findSequence = () => {
    const number = findBreakingNumber()
    let sumNumbers = []
    let i = 0
    let currentStartIndex = 0
    let sum = 0

    while(sum === 0) {
      sumNumbers.push(input[i])

      const currentSum = sumNumbers.reduce((acc, current) => acc + current)

      if (currentSum === number) {
        const sortedSum = sumNumbers.sort((a, b) => a - b)

        sum = sortedSum[0] + sortedSum[sortedSum.length - 1]
      } else if(currentSum > number) {
        currentStartIndex++

        i = currentStartIndex
        
        sumNumbers = []
      } else {
        i++
      }
    }

  return sum
}

console.log(findSequence())