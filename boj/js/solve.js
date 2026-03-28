//1464 1로 만들기
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
   const input = require('fs').readFileSync(0).toString().trim()
   */
