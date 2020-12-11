const input = require("./input").split("\n").map(item => item.split(""))
let occupiedSeats = 0

const countEmptyAdjacentSeats = (rows, seats, currentRowNumber, currentSeatNumber) => {
  let occupiedSeats = 0
  if(seats[currentSeatNumber - 1] === "#") {
    occupiedSeats++
  }
  if(seats[currentSeatNumber + 1] === "#") {
    occupiedSeats++
  }
  if(rows[currentRowNumber - 1] && rows[currentRowNumber - 1][currentSeatNumber] === "#" ) {
    occupiedSeats++
  }
  if(rows[currentRowNumber + 1] && rows[currentRowNumber + 1][currentSeatNumber] === "#") {
    occupiedSeats++
  }
  if(rows[currentRowNumber - 1] && rows[currentRowNumber - 1][currentSeatNumber - 1] === "#") {
    occupiedSeats++
  }
  if(rows[currentRowNumber - 1] && rows[currentRowNumber - 1][currentSeatNumber + 1] === "#") {
    occupiedSeats++
  }
  if(rows[currentRowNumber + 1] && rows[currentRowNumber + 1][currentSeatNumber - 1] === "#") {
    occupiedSeats++
  }
  if(rows[currentRowNumber + 1] && rows[currentRowNumber + 1][currentSeatNumber + 1] === "#") {
    occupiedSeats++
  }

  return occupiedSeats
}

const changeSeats = (array) => {
  return array.map((row, currentRowNumber, rows) => {
    return row.map((seat, currentSeatNumber, seats) => {
      if (seat === "L" && countEmptyAdjacentSeats(rows, seats, currentRowNumber, currentSeatNumber) === 0) {
        occupiedSeats++
        return "#"
    } else if (seat === "#" && countEmptyAdjacentSeats(rows, seats, currentRowNumber, currentSeatNumber) >= 4) {
      occupiedSeats--
      return "L"
    } else if (seat === "#") {
      occupiedSeats++
      return seat
    } else {
      return seat
    }
    })
  })
}

const countOccupiedSeats = () => {
  let seatMap = [...input]
  let previousOccupiedSeats = null

  while (previousOccupiedSeats !== occupiedSeats) {
    previousOccupiedSeats = occupiedSeats
    occupiedSeats = 0
    seatMap = changeSeats(seatMap)
  }
  return occupiedSeats
}

console.log(countOccupiedSeats())