//24266 알고리즘 수업 - 알고리즘의 수행 시간 5
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = BigInt(fs.readFileSync(filePath).toString().trim())

console.log((input * (input - 1n) * (input - 2n)) / 6n + '\n' + '3')
