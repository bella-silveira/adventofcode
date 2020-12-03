const input = require("./input")

const countTrees = (addX, addY) => {
  const forestMap = input.split("\n")
  const lineLength = forestMap[0].length
  let currentIndex = 0
  let currentLine = 0
  let treeCount = 0

  while (currentLine < forestMap.length) {
    const posX = currentIndex % lineLength
    if (forestMap[currentLine][posX] === "#") {
        treeCount++
    }
    currentIndex += addX
    currentLine += addY
  }

  return treeCount
}

console.log(countTrees(3, 1))

module.exports = countTrees