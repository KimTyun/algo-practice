// 1193 분수찾기
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')
const input = fs.readFileSync(filePath).toString().trim()

/*
아이디어
1-1. 1/x은 1,2,4,7,11,16...(등차수열) 에서 짝수번에 해당함
1-2 x/1은 위 등차수열에서 홀수번에 해당함


ex) 8번째 의 경우 7번째인 1/4에서 분자와 분모에 1을 더하고 뺀 2/3이다.

솔루션
1. n이 등차수열에서 몇번째 수 다음에 나오는 수 인지 알아낸다
2-1. n이 등차수열일 때(n==i), 등차수열에서 홀수번 째면 x/1, 짝수번째면 1/x .
3. 해결한다
*/
const n = Number(input)
let x = 1 // 등차수열의 몇 번째인지 확인
let i = 1 // x가 나열된 분수에서 몇번재인지 확인

// 1. n이 등차수열에서 몇번째 수 다음에 나오는 수 인지 알아낸다
while (n > i) {
   i += x
   x++
}

//2-1. n이 등차수열일 때(n==i), 등차수열에서 홀수번 째면 x/1, 짝수번째면 1/x .
if (n == i) {
   x % 2 == 0 ? console.log(`1/${x}`) : console.log(`${x}/1`)
} else {
   //2-2. n이 등차수열이 아닐 때(n<i), 분자+분모=x
   // n-(i-(x-1)) 는 n이 이전 등차수열에서 몇칸 떨어져 있나를 나타냄
   const distance = n - (i - (x - 1))
   if (x % 2 == 0) {
      //x가 짝수일때, n이 이전 등차수열에서 떨어져 있는 칸수만큼  분자는 x-1에서 줄어들고 분모는 1에서 늘어난다.
      console.log(`${x - 1 - distance}/${1 + distance}`)
   } else {
      //x가 홀수일때, n이 distance만큼 분자는 늘고, 분모는 줄어든다
      console.log(`${1 + distance}/${x - 1 - distance}`)
   }
}

/*
개선포인트

1. 대각선 단위로 생각하면 쉬움(1번째 대각선은 1/1, 2번째 대각선은 1/2~2/1, ...)
2. 1의 연장으로 대각선에서 몇번째인지(offset)과 몇 번째 대각선인지(diagonal)를 계산하면 좀더 쉬움 + 변수명 명확함

 */
