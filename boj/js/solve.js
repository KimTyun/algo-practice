//27323 직사각형
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs
   .readFileSync(filePath)
   .toString()
   .trim()
   .split('\n')
   .map((e) => e.split(' ').map(Number))

const X = input.map((e) => e[0])
const Y = input.map((e) => e[1])

const A = X[0] == X[1] ? X[2] : X[0] == X[2] ? X[1] : X[0]
const B = Y[0] == Y[1] ? Y[2] : Y[0] == Y[2] ? Y[1] : Y[0]

console.log(`${A} ${B}`)
