//1764 듣보잡
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split('\r\n')

const [N, M] = input[0].split(' ').map(Number)

const setN = new Set(input[1].split(' '))
const setM = new Set(input[1].split(' '))
