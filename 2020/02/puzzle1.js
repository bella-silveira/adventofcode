const input = require("./input")

const calculateValidPasswords = () => {
    const newInputs = input
      .map(item => item.split(" "))
    let validPasswods = []

    newInputs.forEach(item => {
      const minMax = item[0].split("-")
      const letter = item[1].slice(0, 1)
      const password = item[2]
      
      if ((password.split(letter).length - 1) >= parseInt(minMax[0]) && (password.split(letter).length - 1) <= parseInt(minMax[1])) {
        validPasswods.push(password)
      }
    })

    return validPasswods.length
}

console.log(calculateValidPasswords())