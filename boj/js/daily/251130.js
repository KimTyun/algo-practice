// 9506번 약수들의 합
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)
input.pop()

/*
1. N의 약수를 전부 구한다.
2. 약수를 죄다 더한다
3. 완전수라면 or 완전수가 아니라면 출력 저장
*/

const answerFactors = []

for (const N of input) {
   const smallFactors = []
   const bigFactors = []
   const sqrtN = Math.sqrt(N)

   // 1.N의 약수를 전부 구한다
   for (let i = 1; i <= sqrtN; i++) {
      if (N % i == 0) {
         smallFactors.push(i)
         bigFactors.push(N / i)
      }
   }
   reverseBigFactors = bigFactors.reverse()
   if (smallFactors[smallFactors.length - 1] == reverseBigFactors[0]) smallFactors.pop()
   answerFactors.push([...smallFactors, ...reverseBigFactors])
}
const answer = answerFactors.map((e) => {
   const n = e.pop()
   if (e.reduce((acc, cur) => acc + cur, 0) == n) {
      return `${n} = ${e.join(' + ')}`
   } else {
      return `${n} is NOT perfect.`
   }
})

console.log(answer.join('\n'))
