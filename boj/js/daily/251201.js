const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

// ─────────────────────────────
//1978 소수찾기
// ─────────────────────────────
function A_1978() {
   const input = fs.readFileSync(filePath).toString().trim().split('\n').pop().split(' ').map(Number)

   // 접근법
   // 1. 1000이하 자연수의 모든 소수를 구한 뒤 input과 비교하기 (어쩌구의 채 사용해보기)
   // 2. input의 수 하나하나 소수인지 체크하기(√N) << 일단 이거부터
   let answer = 0
   for (const i of input) {
      const sqrtI = Math.sqrt(i)

      //1,2,3일땐 sqrtI가 j보다 작아서 for문이 안돌아감
      if (i == 2 || i == 3) {
         answer++
      } else if (i == 1) {
         continue
      } else {
         let isPrime = true
         for (let j = 2; j <= sqrtI; j++) {
            if (i % j == 0) {
               isPrime = false
               break
            }
         }
         if (isPrime) answer++
      }
   }
   console.log(answer)
}

// ─────────────────────────────
//2581 소수
// ─────────────────────────────
function A_2581() {
   const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

   const [M, N] = input
   let numberList = [...new Array(N - 1)].map((e, i) => i + 2)
   const primeList = []

   while (true) {
      if (numberList[0] >= M) primeList.push(numberList[0])
      numberList = numberList.filter((e) => e % numberList[0] != 0)
      if (numberList.length == 0) break
   }

   const answer =
      primeList.length != 0
         ? `${primeList.reduce((acc, cur) => (acc += cur), 0)}
${primeList[0]}`
         : -1
   console.log(answer)

   //개선점
   /*
    filter기반 seive는 느림
    list 만드는 방법 : array.from 으로 ㄱㄱ
    */
}
