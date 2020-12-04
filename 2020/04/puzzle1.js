const input = require("./input")

const countValidPassports = () => {
  const passports = input.split("\n\n")
  let validPassports = []

  passports.forEach(item => {
      if(item.includes("byr") && item.includes("iyr") && item.includes("eyr") && item.includes("hgt") && item.includes("hcl") && item.includes("ecl") && item.includes("pid")) {
        validPassports.push(item)
      }
  })

  return validPassports.length
}

console.log(countValidPassports())