const input = require("./input")

const countYesAnswers = () => {
  const groupsAnswers = input.split("\n\n").map(item => item.split("\n"))
  
  const groupAnswersStats = groupsAnswers.map(group => {
    const answers = {}
    let amountOfCommonYesAnswers = 0

    group.forEach(personAnswer => {
      for(let i = 0; i < personAnswer.length; i++) {
        if(answers[personAnswer[i]]) {
          answers[personAnswer[i]]++
        } else {
          answers[personAnswer[i]] = 1
        }
      }
    })
    
    for (const [key, value] of Object.entries(answers)) {
      if(value === group.length) {
        amountOfCommonYesAnswers++
      }
    }

    return amountOfCommonYesAnswers
  })

  const sumYes = groupAnswersStats.reduce((acc, current) => acc + current)

  return sumYes
}

console.log(countYesAnswers())