const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')
const input = fs.readFileSync(filePath).toString().trim()

// const fs = require('fs')
// const input = fs.readFileSync(0, 'utf8').toString().trim()

const N = Number(input.split('\n')[0])
const names = input
   .split('\n')
   .map((e) => e.split(' '))
   .filter((_, i) => i !== 0)

small = names.reduce((prev, cur, index) => (Number(prev[1]) > Number(cur[1]) ? (prev = [...cur, index]) : (prev = prev)), names[0])

answer = []
for (let i = small[2] ?? 0; i < names.length; i++) {
   //    console.log(names[i][0])
   answer.push(names[i][0])
}
for (let i = 0; i < small[2]; i++) {
   answer.push(names[i][0])
}

console.log(answer.join('\n'))
