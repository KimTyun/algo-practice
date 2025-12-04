// 1018 체스판 다시 칠하기
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()
const N = Number(input)

//1. N을 5로 나누면 나머지가 0,1,2,3,4가 나옴
// 나머지가 0이면 끝
// 나머지가 1이면 5하나 빼면 6이됨
// 2이면 5두개 빼면 12됨
// 3은 3임
// 4는 5하나 빼면 9가됨

//3x+5y=N 의 x와y가 정수인 해가 없다면 -1
//나머지가 1,4인데 5를 뺄수 없으면 정수해가 없음 = 1과 4
//나머지가 2인데 5를 두개 못빼면 정수해가 없음 = 7
// 그외 전부 가능함

if (N == 4 || N == 7) console.log(-1)
else {
   switch (N % 5) {
      case 0:
         console.log(N / 5)
         break
      case 1:
         console.log(Math.floor(N / 5) + 1)
         break
      case 2:
         console.log(Math.floor(N / 5) + 2)
         break
      case 3:
         console.log(Math.floor(N / 5) + 1)
         break
      case 4:
         console.log(Math.floor(N / 5) + 2)
         break
      default:
         console.log('메롱')
         break
   }
}
