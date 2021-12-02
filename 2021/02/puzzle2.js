const input = require("./input").split("\n").map(line => {
  const commandValuePair = line.split(" ");
  return {
    command: commandValuePair[0],
    units: parseInt(commandValuePair[1])
  }
})

const getPosition = () => {
  let depth = 0;
  let horizontal = 0;
  let aim = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].command === "forward") {
      horizontal += input[i].units;
      depth += aim * input[i].units;
    } else if (input[i].command === "down") {
      aim += input[i].units;
    } else {
      aim -= input[i].units;
    }
  }
  return depth * horizontal;
}

console.log(getPosition())
