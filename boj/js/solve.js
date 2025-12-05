//2751 수 정렬하기 2
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)
input.shift()
console.log(input.sort((a, b) => a - b).join('\n'))
