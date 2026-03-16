//1932 정수 삼각형

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
   const input = require('fs').readFileSync(0).toString().trim()
   */

const triangle = input.split('\n').map((e) => e.split(' ').map(Number))
const N = triangle[0]

//맨 아래서부터 2개씩 묶어서 큰수만 남김(4 5 2 6 5 면 45-5, 52-5, 26-6, 65-5)
//그 다음 층이랑 더함(그 다음층이 2 7 4 4 면 7 12 10 9)
//더한 층을 다시 2개씩 묶어서 큰수만 남김 (7 12- 12, 12 10-12, 10-9-10)
//반복

for (let i = N; i > 0; i--) {
   const floor = triangle[i]
   for (let j = 0; j < floor.length - 1; j++) {
      if (floor[j] >= floor[j + 1]) triangle[i - 1][j] += floor[j]
      else triangle[i - 1][j] += floor[j + 1]
   }
}

console.log(triangle[1][0])
