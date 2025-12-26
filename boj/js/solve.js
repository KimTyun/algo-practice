// 28278 스택2
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split('\n')

// 스택- 선입후출
const stack = []

function order1(x) {
   stack.push(x)
}
function order2() {
   return stack.pop() ?? -1
}

function order3() {
   return stack.length
}

function order4() {
   return stack.length ? 0 : 1
}

function order5() {
   return stack[stack.length - 1] ?? -1
}

const answer = []
for (let i = 1; i < input.length; i++) {
   const [O, N] = input[i].split(' ').map(Number)
   switch (O) {
      case 1:
         order1(N)
         break
      case 2:
         answer.push(order2())
         break
      case 3:
         answer.push(order3())
         break
      case 4:
         answer.push(order4())
         break
      case 5:
         answer.push(order5())
         break
   }
}

console.log(answer.join('\n'))
