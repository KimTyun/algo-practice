// 2501 약수 구하기
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

const [N, K] = input
const firstList = []
const secondList = []
let answer
//조건을 i<=N/2로 하면 약수 다나옴(시간복잡도 O(N/2))
// i<N제곱근으로 하면 약수 절반만나옴(시간복잡도 O(루트N)), 뒤 절반을 구해야함(시간복잡도는 줄어들긴하는데 코드 길어짐) << 이걸로 ㄱ

//firstList는 약수를 앞에서부터, secondList는 약수를 뒤에서붙어 만듬
for (let i = 1; i <= Math.sqrt(N); i++) {
   if (N % i == 0) {
      firstList.push(i)
      secondList.push(parseInt(N / i))
   }

   //일찍 값을 찾으면 걍 결과
   if (firstList.length == K) {
      answer = firstList.pop()
      break
   }
}

//위에서 정답 못찾았다면
if (!answer) {
   //소숫점 올림한 수가 원래 수랑 같음 = 정수임 = 원래 N은 제곱수임
   if (Math.ceil(Math.sqrt(N)) == Math.sqrt(N)) {
      //제곱수일땐 first와 second에 제곱근이 중복되니 제곱근 제거
      firstList.pop()
   }
   //모든 소수 리스트 result 완성
   const result = firstList.concat(secondList.reverse())

   answer = result.length < K ? 0 : result[K - 1]
}
console.log(answer)
