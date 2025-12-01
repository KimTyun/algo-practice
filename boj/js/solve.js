//2581 소수
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

const [M, N] = input
let numberList = [...new Array(N - 1)].map((e, i) => i + 2)
const primeList = []

while (true) {
   if (numberList[0] >= M) primeList.push(numberList[0])
   numberList = numberList.filter((e) => e % numberList[0] != 0)
   if (numberList.length == 0) break
}

const answer =
   primeList.length != 0
      ? `${primeList.reduce((acc, cur) => (acc += cur), 0)}
${primeList[0]}`
      : -1
console.log(answer)
