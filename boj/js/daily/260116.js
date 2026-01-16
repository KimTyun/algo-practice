//11729 하노이 탑 이동순서

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/
//
const answer = []
function solution(N, from, to, aux) {
   if (N === 1) answer.push(`${from} ${to}`)
   else {
      solution(N - 1, from, aux, to)
      answer.push(`${from} ${to}`)
      solution(N - 1, aux, to, from)
   }
}
solution(Number(input), 1, 3, 2)

console.log(answer.length + '\n' + answer.join('\n'))
