const input = require("./input")
let sum = 0
let hasFoundVisited = false

const runProgram = () => {
    const instructions = input.split("\n").map(instruction => ({ instruction: instruction.split(" "), visited: false }))
    let pointer = 0

    while (!hasFoundVisited) {
      const command = instructions[pointer].instruction[0]
      const value = parseInt(instructions[pointer].instruction[1])
      
      if(command === "acc") {
        sum += value
        pointer++
      } else if (command === "jmp") {
        pointer += value
      } else if (command === "nop") {
        pointer++
      }

      if (!instructions[pointer].visited) {
        instructions[pointer].visited = true
      } else {
        hasFoundVisited = true
      }
    }

    return sum
}

console.log(runProgram())

