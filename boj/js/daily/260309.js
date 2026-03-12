const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

const input = fs.readFileSync(filePath).toString().trim()

//9184 신나는 함수 실행
function A_9184() {
   /*제출용
       const input = require('fs').readFileSync(0).toString().trim()
       */

   // 1. 셋중 하나라도 0 이하라면 1 리턴
   // 2. 셋중 하나라도 20초과면 20 20 20으로 초기화
   // 3. a<b<c면 w(a,b,c-1) + w(a,b-1,c-1) - w(a,b-1,c)
   // 4. 셋중 하나도 아니면 w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)

   // 답 저장을 3차원으로 해서 N[a][b][c] = 도출값 으로 저장해두면 될듯?

   const LIST = input.split('\r\n').map((e) => e.split(' ').map(Number))
   LIST.pop()
   const result = Array.from({ length: 21 }).map((e) => Array.from({ length: 21 }).map((e) => Array.from({ length: 21 })))

   const answer = []

   for (l of LIST) {
      const [a, b, c] = l
      answer.push([l, calc(a, b, c)])
   }

   function calc(a, b, c) {
      if (result[a]?.[b]?.[c]) return result[a][b][c]
      if (a <= 0 || b <= 0 || c <= 0) return 1
      if (a > 20 || b > 20 || c > 20) return calc(20, 20, 20)

      if (a < b && b < c) {
         result[a][b][c] = calc(a, b, c - 1) + calc(a, b - 1, c - 1) - calc(a, b - 1, c)
         return result[a][b][c]
      } else {
         result[a][b][c] = calc(a - 1, b, c) + calc(a - 1, b - 1, c) + calc(a - 1, b, c - 1) - calc(a - 1, b - 1, c - 1)
         return result[a][b][c]
      }
   }

   answer.forEach((e) => {
      console.log(`w(${e[0][0]}, ${e[0][1]}, ${e[0][2]}) = ${e[1]}`)
   })
}

//1904 01타일
function A_1904() {
   /*제출용
       const input = require('fs').readFileSync(0).toString().trim()
       */

   const N = Number(input)

   //1. 아래서부터 센다하면 길이가 1인건 1개
   //2. 길이가 2인건 00,11 2개
   //3. 길이3(001, 111, 100)
   //4. 길이 4(001[1],111[1] 100[1], 00[00],11[00] )
   //길이5(   0011[1], 1111[1], 1001[1], 0000[1], 1100[1], 001[00], 111[00], 100[00])
   //dp[n]= dp[n-1]+dp[n-2]
   let a = 1
   let b = 2
   let c = 1
   if (N == 2) c = 2
   for (let i = 3; i <= N; i++) {
      c = (a + b) % 15746
      a = b
      b = c
   }
   console.log(c)
}

//9461 파도반 수열
function A_9461() {
   /*제출용
       const input = require('fs').readFileSync(0).toString().trim()
       */
   // ;(1, 1, 1, 2, 2, 3, 4, 5, 7, 9)
   // 1,2,3번째는 고정, 4번째부터 n-3+n-2규칙
   // 여러개 테스트케이스를 제출해야하니 dp에 저장해두고 이전값 재활용

   const T = input.split('\r\n').map(Number)

   const dp = [0, 1, 1, 1]
   answer = ''
   for (let i = 1; i < T.length; i++) {
      t = T[i]
      if (dp[t]) {
         answer += `${dp[t]}\n`
      } else {
         for (let j = dp.length; j <= t; j++) {
            dp[j] = dp[j - 3] + dp[j - 2]
         }
         answer += `${dp[t]}\n`
      }
   }
   result = answer.replace(/\n$/, '')
   console.log(result)
}
