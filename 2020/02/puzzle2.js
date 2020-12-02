const input = require("./input")

const calculateValidPasswords = () => {
    const newInputs = input
      .map(item => item.split(" "))
    let validPasswods = []

    newInputs.forEach(item => {
      const positions = item[0].split("-").map(item => parseInt(item) - 1)
      const letter = item[1].slice(0, 1)
      const password = item[2]

      if ((password[positions[0]] === letter && password[positions[1]] !== letter) || (password[positions[0]] !== letter && password[positions[1]] === letter)) {
        validPasswods.push(password)
      }
    })

    return validPasswods.length
}

console.log(calculateValidPasswords())