const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

// ─────────────────────────────
//4134 다음소수
// ─────────────────────────────
function A_4134() {
   const input = fs.readFileSync(filePath).toString().trim().split('\r\n').map(Number)

   //1. 각 테스트케이스부터 1씩 늘려가며 루트n 검사로 찾아나가기?
   const answer = []
   for (let i = 1; i < input.length; i++) {
      const number = input[i]
      if (number === 0 || number === 1) {
         answer.push(2)
         continue
      }
      for (let j = number; true; j++) {
         let isPrime = true
         for (let k = 2; k * k <= j; k++) {
            if (j % k == 0) {
               isPrime = false
               break
            }
         }
         if (isPrime) {
            answer.push(j)
            break
         }
      }
   }
   console.log(answer.join('\n'))
}

// ─────────────────────────────
//1929 소수 구하기
// ─────────────────────────────
function A_1929() {
   const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

   const [A, B] = input

   const isPrime = new Array(B + 1).fill(1)
   isPrime[0] = 0
   isPrime[1] = 0
   for (let i = 1; i * i <= B; i++) {
      if (!isPrime[i]) continue
      for (let j = i * i; j <= B; j += i) {
         isPrime[j] = 0
      }
   }

   const answer = []
   for (let i = A; i <= B; i++) {
      if (isPrime[i]) answer.push(i)
   }

   console.log(answer.join('\n'))
}
