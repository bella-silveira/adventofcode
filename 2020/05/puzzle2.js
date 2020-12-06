const input = require("./input")

const getHighestSeatId = () => {
  const boardingPasses = input.split("\n")

  const seatIds = boardingPasses.map(item => {
    let leftRow = 0
    let rightRow = 127
    let leftColumn = 0
    let rightColumn = 7
    let seatId = 0

    for (let j = 0; j < item.length; j++) {
      if (item[j] === "F") {
        rightRow = Math.floor((rightRow + leftRow)/2)
      }

      if (item[j] === "B") {
        leftRow = Math.ceil((rightRow + leftRow)/2)
      }
      if (item[j] === "L") {
        rightColumn = Math.floor((rightColumn + leftColumn)/2)
      }

      if (item[j] === "R") {
        leftColumn = Math.ceil((rightColumn + leftColumn)/2)
      }
      
      if (j === item.length - 1) {
        seatId = leftRow * 8 + leftColumn
      }
    }
    return seatId
  })
  
  const sortedSeatIds = seatIds.sort((a, b) => a - b)
  
  for(let i = 0; i < sortedSeatIds.length; i++) {
    if (sortedSeatIds[i] !== (sortedSeatIds[i+1]-1)) {
      return sortedSeatIds[i] + 1
    }
  }
}

console.log(getHighestSeatId())