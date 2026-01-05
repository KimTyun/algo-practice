fs = require('fs')
path = require('path')
filePath = path.join(__dirname, 'input.txt')
input = fs.readFileSync(filePath).toString().trim()

const arr = JSON.parse(input)

//프로그래머스에서는 solution(data)를 통해 제출해야함
function solution(arr) {
   const matrix = arr.map((e) => [...e])

   //dfs bfs
   //1 체크용 arr 만들기
   //2.체크 안된 칸부터 검사, 우선 x가 아닌 칸이 나올떄까지 ㄱ
   //3. 숫자칸이 나왔으면 bfs/dfs를 돌려서 덩어리를 찾아냄.
   //4. 덩어리 다찾았으면 다시 체크안된 칸을 찾음
   //5. 모든 칸을 체크했으면 덩어리 중 숫자가 가장 큰 값이 정답
   let answer = []

   //1
   const visited = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(false))

   for (const x in matrix) {
      for (const y in matrix[x]) {
         if (visited[x][y]) continue
         const island = DFS([Number(x), Number(y)])
         if (island != -1) answer.push(island)
      }
   }

   function DFS([x, y]) {
      const stack = []
      let count = 0
      stack.push([x, y])
      while (stack.length) {
         let [vX, vY] = stack.pop()
         if (visited[vX][vY]) continue
         visited[vX][vY] = true
         if (matrix[vX][vY] === 'X') continue
         count += Number(matrix[vX][vY])

         const check = [
            [vX, vY + 1],
            [vX + 1, vY],
            [vX, vY - 1],
            [vX - 1, vY],
         ]
         for (let node of check) {
            const [nX, nY] = node
            if (visited[nX]?.[nY] === false) {
               stack.push([nX, nY])
            }
         }
      }
      return count === 0 ? -1 : count
   }

   if (answer.length === 0) return [-1]
   else return answer.sort((a, b) => a - b)
}

solution(arr)
