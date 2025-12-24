const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

// ─────────────────────────────
//1735 분수 합
// ─────────────────────────────
function A_1735() {
   const input = fs.readFileSync(filePath).toString().trim().split('\r\n')

   const [A, B] = input[0].split(' ').map(Number)
   const [C, D] = input[1].split(' ').map(Number)

   let numerator = A * D + B * C
   let denominator = B * D

   g = gcd(numerator, denominator)

   function gcd(A, B) {
      let big = A >= B ? A : B
      let small = big == A ? B : A

      while (small) {
         r = big % small
         big = small
         small = r
      }
      return big
   }

   console.log(numerator / g, denominator / g)
}

// ─────────────────────────────
//2485 가로수
// ─────────────────────────────
function A_2485() {
   const input = fs.readFileSync(filePath).toString().trim().split('\r\n').map(Number)

   const distance = []
   for (let i = 1; i < input.length - 1; i++) {
      distance.push(input[i + 1] - input[i])
   }
   distance.sort((a, b) => a - b)
   const small = distance[0]

   const divisor = []
   for (let i = 1; i ** 2 <= small; i++) {
      if (small % i == 0) {
         divisor.push(i)
         divisor.push(small / i)
      }
   }

   if ([...new Set(distance)].length == 1) {
      console.log(0)
   } else {
      divisor.sort((a, b) => b - a)
      let count = 0
      for (const i of divisor) {
         count = 0
         for (const j of distance) {
            if (j % i == 0) {
               count += j / i - 1
            } else {
               count = 0
               break
            }
         }
         if (count) break
      }
      console.log(count)
   }
}
