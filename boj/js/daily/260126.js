//2580 스도쿠

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
   const input = require('fs').readFileSync(0).toString().trim()
   */
const grid = input.split('\n').map((e) => e.split(' ').map(Number))
const NUMBERLIST = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const rowUsed = Array.from({ length: 9 }, () => Array(10).fill(false))
const colUsed = Array.from({ length: 9 }, () => Array(10).fill(false))
const boxUsed = Array.from({ length: 9 }, () => Array(10).fill(false))
for (let i = 0; i < 9; i++) {
   for (let j = 0; j < 9; j++) {
      const v = grid[i][j]
      if (v !== 0) {
         rowUsed[i][v] = true
         colUsed[j][v] = true
         const box = Math.floor(i / 3) * 3 + Math.floor(j / 3)
         boxUsed[box][v] = true
      }
   }
}

function find(x, y) {
   const box = Math.floor(x / 3) * 3 + Math.floor(y / 3)
   const result = []

   for (let n = 1; n <= 9; n++) {
      if (!rowUsed[x][n] && !colUsed[y][n] && !boxUsed[box][n]) {
         result.push(n)
      }
   }
   return result
}

//1. 가장 가까운 0을 찾음
//2. 후보수를 구함, 후보수 중 하나 넣고 다음으로 진행
//3. 진행하다가 막히면 되돌리기
//4. 진행결과 0을 다 없애면 끝
function solution(x, y) {
   let nextX = -1
   let nextY = -1
   for (let i = x; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
         if (grid[i][j] === 0) {
            nextX = i
            nextY = j
            break
         }
      }
      if (nextX !== -1) break
   }
   if (nextX === -1) return 'done'

   const option = find(nextX, nextY)
   if (option.length === 0) return
   for (const o of option) {
      grid[nextX][nextY] = o
      rowUsed[nextX][o] = true
      colUsed[nextY][o] = true
      boxUsed[Math.floor(nextX / 3) * 3 + Math.floor(nextY / 3)][o] = true
      if (solution(nextX, nextY) === 'done') return 'done'
      else {
         grid[nextX][nextY] = 0
         rowUsed[nextX][o] = false
         colUsed[nextY][o] = false
         boxUsed[Math.floor(nextX / 3) * 3 + Math.floor(nextY / 3)][o] = false
      }
   }
}
solution(0, 0)
console.log(grid.map((e) => e.join(' ')).join('\n'))
