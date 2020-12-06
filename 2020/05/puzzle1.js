const input = require("./input")

const getHighestSeatId = () => {
  const boardingPasses = input.split("\n")
  let highestId = 0

  for (let i = 0; i < boardingPasses.length; i++) {
    let leftRow = 0
    let rightRow = 127
    let leftColumn = 0
    let rightColumn = 7

    for (let j = 0; j < boardingPasses[i].length; j++) {
      if (boardingPasses[i][j] === "F") {
        rightRow = Math.floor((rightRow + leftRow)/2)
      }

      if (boardingPasses[i][j] === "B") {
        leftRow = Math.ceil((rightRow + leftRow)/2)
      }
      if (boardingPasses[i][j] === "L") {
        rightColumn = Math.floor((rightColumn + leftColumn)/2)
      }

      if (boardingPasses[i][j] === "R") {
        leftColumn = Math.ceil((rightColumn + leftColumn)/2)
      }
      
      if (j === boardingPasses[i].length - 1) {
        const seatId = leftRow * 8 + leftColumn
        if (seatId > highestId) {
          highestId = seatId
        }
      }
    }
  }
  
  return highestId
}

console.log(getHighestSeatId())