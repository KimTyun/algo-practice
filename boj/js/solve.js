//2580 스도쿠

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
   const input = require('fs').readFileSync(0).toString().trim()
   */

console.log(Math.floor(1 / 2) * 3 - 4 + 5 + 6)
