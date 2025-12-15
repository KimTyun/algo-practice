//10814 나이순 정렬
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')
const input = fs.readFileSync(filePath).toString().trim().split('\r\n')
input.shift()

console.log(
   input
      .sort((a, b) => {
         return Number(a.split(' ')[0]) - Number(b.split(' ')[0])
      })
      .join('\n')
)
