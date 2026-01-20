//15652 N과 M (4)

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
   const input = require('fs').readFileSync(0).toString().trim()
   */
const [N, M] = input.split(' ').map(Number)

const answer = []
const freq = []
function solution() {
   if (freq.length === M) {
      answer.push(freq.join(' '))
      return
   }

   for (let i = 1; i <= N; i++) {
      if (i >= (freq[freq.length - 1] ?? 0)) {
         freq.push(i)
         solution()
         freq.pop()
      }
   }
}

solution()
console.log(answer.join('\n'))
