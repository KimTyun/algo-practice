const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')
const input = fs.readFileSync(filePath).toString().trim()

// const fs = require('fs')
// const input = fs.readFileSync(0, 'utf8').toString().trim()

const names = input.split('\r\n')
const N = Number(names[0])

const answers = {}

for (let i = 1; i <= N; i++) {
   answers[names[i]] = (answers[names[i]] ?? 0) + 1
}
answer = ''
num = 0
for (i in answers) {
   if (num < answers[i]) {
      num = answers[i]
      answer = i
   }
}

console.log(answer)
