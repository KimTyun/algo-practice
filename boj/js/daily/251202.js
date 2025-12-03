const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

// ─────────────────────────────
//11653 소인수분해
// ─────────────────────────────
function A_11653() {
   const input = Number(fs.readFileSync(filePath).toString().trim())
   let N = input

   const primeList = []
   const sqrt = Math.sqrt(N)
   for (let i = 2; i <= sqrt; i++) {
      while (N % i == 0) {
         primeList.push(i)
         N /= i
      }
   }

   if (N != 1) primeList.push(N)

   if (input == 1) console.log('')
   else console.log(primeList.join('\n'))
}

// ─────────────────────────────
//27323 직사각형
// ─────────────────────────────
function A_27323() {
   const input = fs.readFileSync(filePath).toString().trim().split('\n')

   console.log(input[0] * input[1])
}

// ─────────────────────────────
//1085 직사각형에서 탈출
// ─────────────────────────────
function A_27323() {
   const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

   const distance = Math.min(input[2] - input[0], input[0], input[3] - input[1], input[1])

   console.log(distance)
}

// ─────────────────────────────
//27323 직사각형
// ─────────────────────────────
function A_3009() {
   const input = fs
      .readFileSync(filePath)
      .toString()
      .trim()
      .split('\n')
      .map((e) => e.split(' ').map(Number))

   const X = input.map((e) => e[0])
   const Y = input.map((e) => e[1])

   const A = X[0] == X[1] ? X[2] : X[0] == X[2] ? X[1] : X[0]
   const B = Y[0] == Y[1] ? Y[2] : Y[0] == Y[2] ? Y[1] : Y[0]

   console.log(`${A} ${B}`)
}

// ─────────────────────────────
//9063 대지
// ─────────────────────────────
function A_9603() {
   const input = fs
      .readFileSync(filePath)
      .toString()
      .trim()
      .split('\n')
      .map((e) => e.split(' ').map(Number))
   const N = input.shift()

   let minX = input[0][0]
   let maxX = input[0][0]
   let minY = input[0][1]
   let maxY = input[0][1]

   for (const i of input) {
      if (i[0] > maxX) maxX = i[0]
      if (i[1] > maxY) maxY = i[1]

      if (i[0] < minX) minX = i[0]
      if (i[1] < minY) minY = i[1]
   }

   if (N == 1) console.log(0)
   else console.log((maxX - minX) * (maxY - minY))
}

// ─────────────────────────────
//10101 삼각형 외우기
// ─────────────────────────────
function A_10101() {
   const input = fs
      .readFileSync(filePath)
      .toString()
      .trim()
      .split('\n')
      .map((e) => e.split(' ').map(Number))
   input.pop()

   const answer = []
   for (const i of input) {
      const [A, B, C] = i
      if (A == B && A == C) {
         answer.push('Equilateral')
         continue
      }

      const max = Math.max(...i)
      const sum = i.reduce((acc, cur) => (acc += cur), 0)
      if (sum - max <= max) {
         answer.push('Invalid')
         continue
      }

      if (A == B || A == C || B == C) {
         answer.push('Isosceles')
      } else {
         answer.push('Scalene')
      }
   }

   console.log(answer.join('\n'))
}

// ─────────────────────────────
//14125 세 막대
// ─────────────────────────────
function A_14125() {
   const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

   const max = Math.max(...input)
   const sum = input.reduce((acc, cur) => (acc += cur), 0)
   const smallSide = sum - max

   if (smallSide <= max) {
      console.log(smallSide * 2 - 1)
   } else {
      console.log(sum)
   }
}
