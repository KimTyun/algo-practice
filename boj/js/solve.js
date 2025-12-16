//10816 숫자 카드 2
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split('\r\n')

const numbersN = input[1].split(' ')
const numbersM = input[3].split(' ')

const dic = {}
const answer = []
for (const number of numbersN) {
   dic[number] ? (dic[number] += 1) : (dic[number] = 1)
}
for (const number of numbersM) {
   answer.push(dic[number] ? dic[number] : 0)
}
console.log(answer.join(' '))
