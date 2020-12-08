const input = require("./input")

const executeInstructions = (instructions) => {
  let pointer = 0
  let hasFoundVisited = false
  let sum = 0

  while (!hasFoundVisited && pointer < instructions.length) {
    const command = instructions[pointer].instruction[0]
    const value = parseInt(instructions[pointer].instruction[1])

    if (!instructions[pointer].visited) {
      instructions[pointer].visited = true
    } else {
      hasFoundVisited = true
      return "loop"
    }

    if(command === "acc") {
      sum += value
      pointer++
    } else if (command === "jmp") {
      pointer += value
    } else if (command === "nop") {
      pointer++
    }
  }

  return sum
}

const findNextJmpNopIndex = (array, startIndex) => {
  for(let i = startIndex; i < array.length; i++) {
    const [command, _] = array[i].instruction
    
    if(command === "jmp" || command === "nop") {
      return i
    }
  }
}

const runProgram = () => {
    let result = "loop"
    let changedIndex = [0]

    while (result === "loop") {
      const instructions = input.split("\n").map(instruction => ({ instruction: instruction.split(" "), visited: false }))
      const changeIndex = findNextJmpNopIndex(instructions, changedIndex[changedIndex.length - 1] + 1)

      instructions[changeIndex].instruction[0] = instructions[changeIndex].instruction[0] === "jmp" ? "nop" : "jmp"
      
      changedIndex.push(changeIndex)
      
      result = executeInstructions(instructions)
    }
    return result
}

console.log(runProgram())

