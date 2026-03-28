const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')
const input = fs.readFileSync(filePath).toString().trim()
/*
 const fs = require('fs')
 const input = fs.readFileSync(0, 'utf8').toString().trim()
 */
const data = input.split('\n').map((e) => e.split(' ').map(Number))
const [N, M] = data[0]

const conki = Array.from(new Array(M + 1)).map((_) => 0)
const raiki = Array.from(new Array(M + 1)).map((_) => 0)
const answer = []
for (let i = 1; i <= N; i++) {
   const [A, B] = data[i]
   conki[A] += 1
   raiki[B] += 1
}

for (let i = 1; i <= M; i++) {
   answer.push(raiki[i] - conki[i])
}

console.log(answer.join('\n'))
