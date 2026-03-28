const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')
const input = fs.readFileSync(filePath).toString().trim()

// const fs = require('fs')
// const input = fs.readFileSync(0, 'utf8').toString().trim()

//FMT 순 회전
const data = input.split(' ').map(Number)
const FMT = ['F', 'M', 'T']
let pointer = 0
while (data[0] > 0) {
   data[0] -= data[(pointer % 3) + 1]
   pointer++
}
console.log(data[0] === 0 ? FMT[pointer % 3] : FMT[(pointer - 1) % 3])
