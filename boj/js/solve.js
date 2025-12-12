//11651 좌표 정렬하기2
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split('\r\n')
input.shift()

const coordinates = input.map((e) => e.split(' ').map(Number))

coordinates.sort((a, b) => {
   if (a[1] == b[1]) return a[0] - b[0]
   return a[1] - b[1]
})

console.log(coordinates.map((e) => e.join(' ')).join('\n'))
