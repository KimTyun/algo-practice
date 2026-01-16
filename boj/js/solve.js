//11729 하노이 탑 이동순서

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/
const [N, M] = input.split(' ').map(Number)

const answer = []

const temp = new Set()

function backTracking() {
   if (temp.size === M) {
      answer.push([...temp].join(' '))
      return
   }
   for (let i = 1; i <= N; i++) {
      if (!temp.has(i)) {
         temp.add(i) //1
         backTracking() //2
      }
   }
}

backTracking()

console.log(answer)
