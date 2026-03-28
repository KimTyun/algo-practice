const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')
const input = fs.readFileSync(filePath).toString().trim()
/*
 const fs = require('fs')
 const input = fs.readFileSync(0, 'utf8').toString().trim()
 */

const data = input.split('\n').map((e) => e.split(' ').map(Number))
const Q = Number(data[0][0])

const niwa = {}
const answer = []
let count = 0

function firstQ(N) {
   niwa[N] === undefined ? (niwa[N] = 1) : (niwa[N] += 1)
   count++
}

function secondQ(N) {
   for (const M in niwa) {
      if (M <= N) {
         count -= niwa[M]
         niwa[M] = 0
      }
   }
}
for (let i = 1; i <= Q; i++) {
   if (data[i][0] === 1) {
      firstQ(data[i][1])
   } else {
      secondQ(data[i][1])
   }

   answer.push(count)
}
console.log(answer.join('\n'))
