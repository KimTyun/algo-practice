//13241 최소공배수
console.time()

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split('\r\n')

const [A, B] = input[0].split(' ').map(Number)
const [C, D] = input[1].split(' ').map(Number)

let a = B > D ? B : D
let b = a == B ? D : B
while (b) {
   r = a % b
   a = b
   b = r
}

const gcd = (B * D) / a
const sum = A * (gcd / B) + C * (gcd / D)

console.log(sum, gcd)
console.timeEnd()
