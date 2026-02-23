fs = require('fs')
path = require('path')
filePath = path.join(__dirname, 'input.txt')
input = fs.readFileSync(filePath).toString().trim()

const [n] = JSON.parse(input)

//프로그래머스에서는 solution(data)를 통해 제출해야함

//3XN 타일링
function solution(n) {
   const grid = Array.from(new Array(3)).map((_) => Array.from(new Array(n)).map((_) => true))

   console.log(grid)

   return n
}

console.log(solution(n))
