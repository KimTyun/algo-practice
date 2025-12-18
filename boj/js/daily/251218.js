const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

// ─────────────────────────────
//1269  대칭차집합
// ─────────────────────────────
function A_1269() {
   const input = fs.readFileSync(filePath).toString().trim().split('\r\n')

   const [N, M] = input[0].split(' ').map(Number)
   const setN = new Set(input[1].split(' '))
   const setM = new Set(input[2].split(' '))

   const union = new Set([...setN, ...setM])
   const intersection = new Set()

   for (const N of setN) {
      if (setM.has(N)) intersection.add(N)
   }
   for (const num of union) {
      if (intersection.has(num)) union.delete(num)
   }

   console.log([...union].length)
}

// ─────────────────────────────
// 11478번  서로 다른 부분 문자열의 개수
// ─────────────────────────────
function A_11478() {
   const input = fs.readFileSync(filePath).toString().trim()

   const answer = new Set()

   for (let i = 1; i <= input.length; i++) {
      for (let j = 0; j <= input.length - i; j++) {
         answer.add(input.substring(j, j + i))
      }
   }

   console.log([...answer].length)
}

// ─────────────────────────────
//1934 최소공배수
// ─────────────────────────────
function A_1934() {
   const input = fs.readFileSync(filePath).toString().trim().split('\r\n')

   const answer = []

   for (let i = 1; i < input.length; i++) {
      const [A, B] = input[i].split(' ').map(Number)
      for (let j = 1; j <= B; j++) {
         if ((A * j) % B == 0) {
            answer.push(A * j)
            break
         }
      }
   }
   console.log(answer.join('\n'))
}

// ─────────────────────────────
//13241 최소공배수
// ─────────────────────────────
function A_13241() {
   const input = fs.readFileSync(filePath).toString().trim()

   const [N, M] = input.split(' ').map(Number)

   let a = N > M ? N : M
   let b = a == N ? M : N
   while (b) {
      r = a % b
      a = b
      b = r
   }
   const gcd = (N * M) / a
   console.log(gcd)
}
