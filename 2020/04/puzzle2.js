const input = require("./input")

const countValidPassports = () => {
  const passports = input.split("\n\n").map(item => item.split(" ").map((item, index, array) => item.includes("\n") ?  item.split("\n") : item).flat())
  const formattedPassports = []
  
  passports.forEach(item => {
    const passportObj = {}
    item.forEach(passportLine => {
      const field = passportLine.slice(0, 3)
      const value = passportLine.slice(4)
      passportObj[field] = value
    })
    formattedPassports.push(passportObj)
  })

  const validPassports =
    formattedPassports
      .filter(item => isBirthYearValid(item.byr))
      .filter(item => isIssueYearValid(item.iyr))
      .filter(item => isExpirationYearValid(item.eyr))
      .filter(item => isHeightValid(item.hgt))
      .filter(item => isHairColorValid(item.hcl))
      .filter(item => isEyeColorValid(item.ecl))
      .filter(item => isPidValid(item.pid))

  return validPassports.length
}

const isBirthYearValid = (birthYear) => {
  const data = parseInt(birthYear)
  return birthYear && birthYear.length === 4 && data >= 1920 && data <= 2002
}

const isIssueYearValid = (issueYear) => {
  const data = parseInt(issueYear)
  return issueYear && issueYear.length === 4 && data >= 2010 && data <= 2020
}

const isExpirationYearValid = (expYear) => {
  const data = parseInt(expYear)
  return expYear && expYear.length === 4 && data >= 2020 && data <= 2030
}

const isHeightValid = (height) => {
  if (!height) {
    return false
  }

  const unit = height.slice(-2)
  const intHeight = parseInt(height.slice(0, height.length-2))

  if (unit === "cm") {
    return intHeight >= 150 && intHeight <= 193
  } else if (unit === "in") {
    return intHeight >= 59 && intHeight <= 76
  } else {
    return false
  }
}

const isHairColorValid = (hairColor) => {
  if (!hairColor) {
    return false
  }

  const colorCode = hairColor.slice(1)
  const hex = parseInt(colorCode,16)
  return hairColor[0] === "#" && hex.toString(16) === colorCode
}

const isEyeColorValid = (eyeColor) => {
  return eyeColor && eyeColor.length === 3 && (eyeColor === "amb" || eyeColor === "blu" || eyeColor === "brn" || eyeColor === "gry" || eyeColor === "grn" || eyeColor === "hzl" || eyeColor === "oth")
}

const isPidValid = (pid) => pid && pid.length === 9

console.log(countValidPassports())