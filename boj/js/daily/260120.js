//로컬 테스트용 인풋
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

const input = fs.readFileSync(filePath).toString().trim()

//15649 N과 M (1)
function A_15649() {
   /*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/
   const [N, M] = input.split(' ').map(Number)

   const answer = []
   const stack = []

   function solution() {
      const freq = []

      while (!!stack.length) {
         const [value, depth] = stack.pop()
         while (!(depth > freq.length)) {
            freq.pop()
         }
         freq.push(value)
         if (depth < M) {
            for (let i = N; i > 0; i--) {
               if (freq.some((e) => e === i)) continue
               else stack.push([i, depth + 1])
            }
         }

         if (freq.length === M) {
            answer.push(freq.join(' '))
            freq.pop()
         }
      }
   }

   for (let i = 1; i <= N; i++) {
      stack.push([i, 1])
      solution()
   }
   console.log(answer.join('\n'))
}

//15650 N과 M (2)
function A_15650() {
   /*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/
   const [N, M] = input.split(' ').map(Number)

   const answer = []
   const freq = []
   const set = new Set()
   function solution() {
      if (freq.length === M) {
         answer.push(freq.join(' '))
         return
      }

      for (let i = (freq[freq.length - 1] ?? 0) + 1; i <= N; i++) {
         if (!set.has(i)) {
            freq.push(i)
            set.add(i)

            solution()

            freq.pop()
            set.delete(i)
         }
      }
   }

   solution()
   console.log(answer.join('\n'))
}

//15651 N과 M (3)
function A_15651() {
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
         freq.push(i)
         solution()
         freq.pop()
      }
   }

   solution()
   console.log(answer.join('\n'))
}

//15652 N과 M (4)
function A_15652() {
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
}
