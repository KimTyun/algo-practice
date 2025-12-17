//1764 듣보잡
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')
const input = fs.readFileSync(filePath).toString().trim().split('\r\n')

function A_1764() {
   const [N, M] = input[0].split(' ').map(Number)

   const setN = new Set()
   const setM = new Set()
   for (let i = 1; i <= N; i++) {
      setN.add(input[i])
   }
   for (let i = N + 1; i < input.length; i++) {
      setM.add(input[i])
   }
   const answer = []
   for (const name of setN) {
      if (setM.has(name)) answer.push(name)
   }

   // const answer = [...setN.intersection(setM)]

   console.log(answer.length + '\n' + answer.sort().join('\n'))
}
