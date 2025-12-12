const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')
const input = fs.readFileSync(filePath).toString().trim()

// ─────────────────────────────
//1427 소트인사이드
// ─────────────────────────────
function A_1427() {
   const inputj = input.split('').map(Number)

   console.log(inputj.sort((a, b) => b - a).join(''))
}

// ─────────────────────────────
//11650 좌표 정렬하기
// ─────────────────────────────
function A_11650() {
   const inputj = input.split('\r\n')
   inputj.shift()

   const coordinates = inputj.map((e) => e.split(' ').map(Number))

   coordinates.sort((a, b) => a[1] - b[1]).sort((a, b) => a[0] - b[0])
   console.log(coordinates.map((e) => e.join(' ')).join('\n'))
}

// ─────────────────────────────
//11651 좌표 정렬하기2
// ─────────────────────────────
function A_11651() {
   const inputj = input.split('\r\n')
   inputj.shift()

   const coordinates = inputj.map((e) => e.split(' ').map(Number))

   coordinates.sort((a, b) => {
      if (a[1] == b[1]) return a[0] - b[0]
      return a[1] - b[1]
   })

   console.log(coordinates.map((e) => e.join(' ')).join('\n'))
}
