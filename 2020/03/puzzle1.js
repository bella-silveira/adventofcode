const input = require("./input")

const countTrees = () => {
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
    currentIndex += 3
    currentLine++
  }

  return treeCount
}

console.log(countTrees())