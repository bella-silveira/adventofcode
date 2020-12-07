const input = require("./input")
const bagRules = input.split(".\n")

const findBags = (bagName) => {
  const rules = bagRules.filter(rule => rule.includes(bagName) && rule.indexOf(bagName) !== 0)
  return rules.map(bag => bag.split(" ").slice(0, 2).join(" "))
}

const countBags = () => {
  let bagNames = ["shiny gold"]
  let previousSize = 0

  while (previousSize !== bagNames.size) {
    previousSize = bagNames.size

    bagNames.forEach(bag => {
      const bagsFound = findBags(bag)
      bagNames = new Set([...bagNames,...bagsFound])
    })
  }
  
  // excluding the initial shiny gold bag
  return bagNames.size - 1
}

console.log(countBags())

