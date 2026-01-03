const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')
const input = fs.readFileSync(filePath).toString().trim()

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim()

const data = input.split('\n')
const a = Number(data[0])
const [b, c] = data[1].split(' ').map(Number)
const s = data[2]

console.log(a + b + c, s)
