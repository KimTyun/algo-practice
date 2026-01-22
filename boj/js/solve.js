//9663 N-Queen

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
   const input = require('fs').readFileSync(0).toString().trim()
   */
const N = Number(input)

let answer = 0 //퀸을 놓을 수 있는 경우의 수(정답)

const col = []
const diag1 = []
const diag2 = []

function placeQueen(i, j, b) {
   //퀸이 점유하면 truly , 점유 안하고있으면 falsy
   !col[j] ? (col[j] = 1) : (col[j] += b)
   !diag1[i + j] ? (diag1[i + j] = 1) : (diag1[i + j] += b)
   !diag2[i - j + N - 1] ? (diag2[i - j + N - 1] = 1) : (diag2[i - j + N - 1] += b)
}

//1. 내 row에 배치한다
//2. row+1에게 배치하라한다
//3. row+1이 마지막이라면 answer++하고 리턴
//3. row+1이 일하고오면 뒤로간다

function solution(row) {
   if (row === N) {
      answer++
      return
   }
   for (let j = 0; j < N; j++) {
      if (col[j] || diag1[row + j] || diag2[row - j + N - 1]) {
         continue
      } else {
         placeQueen(row, j, 1)
         solution(row + 1)
         placeQueen(row, j, -1)
      }
   }
}
solution(0)
console.log(answer)
