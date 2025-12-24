//1929 소수 구하기

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

const [A, B] = input

const isPrime = new Array(B + 1).fill(1)
isPrime[0] = 0
isPrime[1] = 0
for (let i = 1; i * i <= B; i++) {
   if (!isPrime[i]) continue
   for (let j = i * i; j <= B; j += i) {
      isPrime[j] = 0
      console.log('?')
   }
}

const answer = []
for (let i = A; i <= B; i++) {
   if (isPrime[i]) answer.push(i)
}

console.log(answer)
