fs = require('fs')
path = require('path')
filePath = path.join(__dirname, 'input.txt')
input = fs.readFileSync(filePath).toString().trim()

const cards = JSON.parse(input)

//프로그래머스에서는 solution(data)를 통해 제출해야함
function solution(cards) {
   // 루프가 가장 큰 2개를 구하는 문제

   function checkLoof(start) {
      let count = 0
      let pointer = start
      do {
         isChecked[pointer - 1] = true
         count++
         pointer = cards[pointer - 1]
      } while (start !== pointer)
      return count
   }

   const isChecked = Array.from(new Array(cards.length)).map((_) => false)
   const roof = []
   for (const i in isChecked) {
      if (isChecked[i]) continue
      roof.push(checkLoof(Number(i) + 1))
   }
   let answer = 0

   let big1 = 0
   let big2 = 0

   for (const r of roof) {
      if (r > big1) {
         big2 = big1
         big1 = r
      } else if (r > big2) big2 = r
   }

   answer = big1 * big2
   return answer
}

console.log(solution(cards))
