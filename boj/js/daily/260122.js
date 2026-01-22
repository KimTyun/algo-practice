const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

const input = fs.readFileSync(filePath).toString().trim()

//9663 N-Queen
function A_9663_1() {
   /*제출용
   const input = require('fs').readFileSync(0).toString().trim()
   */
   const N = Number(input)

   let answer = 0 //퀸을 놓을 수 있는 경우의 수(정답)
   const stack = []
   //1. 퀸 범위가 아닌 곳에퀸을 둔다
   //2. 퀸의 범위를 표시한다
   //3. 재귀로 1-2를 반복한다
   //4. 체크 되었으면 answer를 1증가시키고 가장 마지막에 두었던 퀸을 되돌린다

   // I : row, depth
   // J : column
   function solution() {
      function placeQueen(i, j, b) {
         //퀸이 점유하면 truly , 점유 안하고있으면 falsy
         !col[j] ? (col[j] = 1) : (col[j] += b)
         !diag1[i + j] ? (diag1[i + j] = 1) : (diag1[i + j] += b)
         !diag2[i - j + N - 1] ? (diag2[i - j + N - 1] = 1) : (diag2[i - j + N - 1] += b)
      }

      const col = []
      const diag1 = []
      const diag2 = []
      const place = []
      while (!!stack.length) {
         const [i, j] = stack.pop()
         //내 단계보다 앞에 있는 퀸들을 모두 치워야함
         //i(단계) 가 0일때 : 1번째 줄 둘차례 = 배치된 퀸이 0개여야함
         //i가 n일때 : n+1번째 둘 차례 = 배치된 퀸이 n개여야함
         while (place.length !== i) {
            const [prevI, prevJ] = place.pop()
            placeQueen(prevI, prevJ, -1)
         }
         place.push([i, j])
         placeQueen(i, j, 1)
         const nextI = i + 1

         let count = 0

         //다음 단계에 둘 수 있는 후보수 삽입
         if (nextI <= N) {
            for (let nextJ = 0; nextJ < N; nextJ++) {
               if (col[nextJ] || diag1[nextI + nextJ] || diag2[nextI - nextJ + N - 1]) {
                  continue
               }
               stack.push([nextI, nextJ])
               count++
            }
         }
         //다 뒀을때 카운트 추가하고, 다음 스택 단계까지 퀸 회수
         if (place.length === N) {
            answer++
            while (place.length !== (stack[stack.length - 1]?.[0] ?? 0)) {
               const [prevI, prevJ] = place.pop()
               placeQueen(prevI, prevJ, -1)
            }
            continue
         }
         //다음 단계가 없음=> 뒀던 퀸 회수
         if (count === 0) {
            placeQueen(i, j, -1)

            place.pop()
         }
      }
   }
   for (let j = 0; j < N; j++) {
      stack.push([0, j])
   }
   solution()

   console.log(answer)
}

//9663 N-Queen
function A_9663_2() {
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
}
