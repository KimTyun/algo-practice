const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

const input = fs.readFileSync(filePath).toString().trim()

//27433 팩토리얼2
function A_27433() {
   /*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/

   function factorial(num) {
      if (num == 0) return 1
      const number = num * factorial(num - 1)
      return number
   }
   console.log(factorial(Number(10)))
}

//10870 피보나치 수 5
function A_10870() {
   /*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/
   // 0번째 0, 1번째 1, n번째 (n-1)+(n-2)

   function fibonacci(N) {
      if (N == 0) return 0
      if (N == 1) return 1
      return fibonacci(N - 1) + fibonacci(N - 2)
   }

   console.log(fibonacci(10))
}

//25501 재귀의 귀재
function A_25501() {
   /*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/
   // 0번째 0, 1번째 1, n번째 (n-1)+(n-2)

   const [N, ...data] = input.split('\r\n')

   const answer = []
   for (let i = 0; i < N; i++) {
      const word = data[i]
      let isPalindrome = 1
      let count = 0
      for (let j = 0; j < Math.ceil(word.length / 2); j++) {
         count++
         if (word[j] == word[word.length - 1 - j]) continue
         isPalindrome = 0
         break
      }
      if (word.length % 2 === 0 && isPalindrome === 1) count++
      answer.push(`${isPalindrome} ${count}`)
   }
   console.log(answer.join('\n'))
   //5글자의 경우 word[2] == word[5-1-2]
}

//4779 칸토어 집합
function A_4779() {
   /*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/
   // 0번째 0, 1번째 1, n번째 (n-1)+(n-2)
   const data = input.split('\r\n').map(Number)
   const answer = []
   function cantorSet(line) {
      if (line.length === 1) return line
      const [N, M] = [line.length / 3, (line.length / 3) * 2]
      let first = line.slice(0, N)
      let second = new Array(line.length / 3).fill(' ')
      let third = line.slice(M, line.length)
      first = cantorSet(first)
      third = cantorSet(third)
      return [...first, ...second, ...third]
   }

   for (const N of data) {
      const line = new Array(3 ** N).fill('-')

      answer.push(cantorSet(line).join(''))
   }

   console.log(answer.join('\n'))
}

//2447 별 찍기 - 10
function A_2447() {
   /*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/

   const K = Math.floor(Math.log(input) / Math.log(3))

   function recursion(K) {
      if (K == 0) {
         return ['*']
      }
      const middleBlock = Array.from(new Array(3 ** (K - 1))).map((_) => ' '.repeat(3 ** (K - 1)))
      const otherBlock = recursion(K - 1)
      return makeComplateBlock(middleBlock, otherBlock, K)
   }

   function makeComplateBlock(middleBlock, otherBlock, K) {
      // 모든 블럭은 배열임(K=1일때 블럭은 배열1, K=2일때 블럭은 배열 3, K=3일떄 블럭 배열 9)
      const length = 3 ** K
      const complateBlock = Array.from(new Array(length)).map((_) => '')

      for (let i = 0; i < 3; i++) {
         for (let j = 0; j < length; j++) {
            //블럭 가운데
            if (i == 1 && j >= length / 3 && j < (length / 3) * 2) complateBlock[j] += middleBlock[j % (length / 3)]
            //블럭 그외
            else complateBlock[j] += otherBlock[j % (length / 3)]
         }
      }
      return complateBlock
   }

   console.log(recursion(K).join('\n'))
}
