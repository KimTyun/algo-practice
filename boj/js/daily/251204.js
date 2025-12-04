const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')
const input = fs.readFileSync(filePath).toString().trim()

// ─────────────────────────────
// 1018 체스판 다시 칠하기
// ─────────────────────────────
function A_1018() {
   const [N, M] = input.split('\r\n').shift().split(' ').map(Number)
   const board = input.map((e) =>
      e
         .split('')
         .map((e) => (e == 'W' ? 0 : 1))
         .join('')
   )

   const BW = 0b10101010
   const WB = 0b01010101

   let answer = 100

   //열 시작점
   for (let row = 0; row <= N - 8; row++) {
      //행 시작점
      for (let column = 0; column <= M - 8; column++) {
         let oddSum = 0
         let evenSum = 0
         for (let i = 0; i < 8; i++) {
            const line = board[row + i]
               .split('')
               .filter((_, index) => column <= index && index < column + 8)
               .join('')
            const odd = (parseInt(line, 2) ^ BW)
               .toString(2)
               .split('')
               .reduce((acc, cur) => (acc += Number(cur)), 0)
            const even = (parseInt(line, 2) ^ WB)
               .toString(2)
               .split('')
               .reduce((acc, cur) => (acc += Number(cur)), 0)
            if (i % 2 == 0) {
               oddSum += odd
               evenSum += even
            } else {
               oddSum += even
               evenSum += odd
            }
         }
         if (answer > oddSum) answer = oddSum
         if (answer > evenSum) answer = evenSum
         if (answer == 0) break
      }
   }

   console.log(answer)

   /**
    * 개선점: 이경우 비트방식이 브루투포스 형식보다 연산량이 많음
    *  * 비트방식도 제대로 구현이 안됨(parseInt라던가... 등등)
    */
}

// ─────────────────────────────
// 1436 영화감독 슘
// ─────────────────────────────
function A_1436() {
   const N = Number(input)

   let count = 0
   let answer = 0
   for (let i = 666; count != N; i++) {
      const number = new String(i).split('').map(Number)
      for (let n = 0; n < number.length; n++) {
         if (number[n] == 6 && number[n - 1] == 6 && number[n + 1] == 6) {
            count++
            break
         }
      }
      answer = i
   }
   console.log(answer)
}

// ─────────────────────────────
// 2839 설탕 배달
// ─────────────────────────────
function A_2839() {
   const N = Number(input)

   //1. N을 5로 나누면 나머지가 0,1,2,3,4가 나옴
   // 나머지가 0이면 끝
   // 나머지가 1이면 5하나 빼면 6이됨
   // 2이면 5두개 빼면 12됨
   // 3은 3임
   // 4는 5하나 빼면 9가됨

   //3x+5y=N 의 x와y가 정수인 해가 없다면 -1
   //나머지가 1,4인데 5를 뺄수 없으면 정수해가 없음 = 1과 4
   //나머지가 2인데 5를 두개 못빼면 정수해가 없음 = 7
   // 그외 전부 가능함

   if (N == 4 || N == 7) console.log(-1)
   else {
      switch (N % 5) {
         case 0:
            console.log(N / 5)
            break
         case 1:
            console.log(Math.floor(N / 5) + 1)
            break
         case 2:
            console.log(Math.floor(N / 5) + 2)
            break
         case 3:
            console.log(Math.floor(N / 5) + 1)
            break
         case 4:
            console.log(Math.floor(N / 5) + 2)
            break
         default:
            console.log('메롱')
            break
      }
   }
}
