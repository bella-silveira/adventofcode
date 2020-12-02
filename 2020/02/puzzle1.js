const input = require("./input")

const calculateValidPasswords = () => {
    const newInputs = input
      .map(item => item.split(" "))
    let validPasswods = []

    newInputs.forEach(item => {
      const minMax = item[0].split("-").map(item => parseInt(item))
      const [min, max] = minMax
      const letter = item[1].slice(0, 1)
      const password = item[2]

      // haha very creative JS problem solving, _but_ essentially 
      // I'm using string.split to tell me how many occurrences of a letter there are in the string
      // e.g. if there aren't "f" in the "abcde" string, it'll return the same string in in array (["abcde"]) of length 1
      // whereas, in "fdefdefde", it'll return an array with 4 elements (whatever is in between the Fs)
      // so we know that the number of occurrences will always be the length of the split result - 1
      if ((password.split(letter).length - 1) >= min && (password.split(letter).length - 1) <= max) {
        validPasswods.push(password)
      }
    })

    return validPasswods.length
}

console.log(calculateValidPasswords())