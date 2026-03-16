//1904 01타일

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

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
