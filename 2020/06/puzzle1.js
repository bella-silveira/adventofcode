const input = require("./input")

const countYesAnswers = () => {
  const groupsAnswers = input.split("\n\n").map(item => item.split("\n"))

  const yesPerGroup = groupsAnswers.map(group => {
    const yesAnswers = new Set()

    group.forEach(personAnswer => {
      for(let i = 0; i < personAnswer.length; i++) {
        yesAnswers.add(personAnswer[i])
      }
    })
    return yesAnswers.size
  })

  const sumYes = yesPerGroup.reduce((acc, current) => acc + current)

  return sumYes
}

console.log(countYesAnswers())