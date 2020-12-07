const input = require("./input")
const bagRules = input.split(".\n")
let bags = {
  "shiny gold": 0,
}

const findRules = (bagName) => {
  return bagRules.filter(rule => rule.includes(bagName) && rule.indexOf(bagName) === 0)
}

const calculateAmountPerBag = (bagColor, multiplier) => {
  if (findRules(bagColor)[0].includes("other")) {
    return 1
  }
  
  const childBags = findRules(bagColor)[0].split("contain ")[1].split(", ")

  childBags.forEach(bag => {
    const bagName = bag.slice(2, -4)
    const bagAmount = parseInt(bag.slice(0, 1))
    const multipliedAmount = bagAmount * multiplier
    if (bags[bagName]) {
      bags[bagName] += multipliedAmount
    } else {
      bags[bagName] = multipliedAmount
    }
    calculateAmountPerBag(bagName, multipliedAmount)
  })

}

const countBags = () => {
  let sum = 0

  calculateAmountPerBag("shiny gold", 1)

  for (const [key, value] of Object.entries(bags)) {
    sum += value
  }
  return sum
}

console.log(countBags())

