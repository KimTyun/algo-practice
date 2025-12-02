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
