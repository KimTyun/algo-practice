const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

// ─────────────────────────────
// 2869 달팽이는 올라가고 싶다
// ─────────────────────────────
function A_2869() {
   const input = fs.readFileSync(filePath).toString().trim().split(' ')
   const [A, B, V] = input

   // 매일 a-b만큼 오른다.
   // v-a 를 올라가는데 걸리는 날짜 + 1일(마지막 a만큼 오름)이 정답

   console.log(Math.ceil((V - A) / (A - B)) + 1)
}

// ─────────────────────────────
// 5086 배수와 약수
// ─────────────────────────────
function A_5086() {
   const input = fs
      .readFileSync(filePath)
      .toString()
      .trim()
      .split('\n')
      .map((e) => e.split(' '))

   // js에서 마지막 0 0은 필요없음
   input.pop()

   //빠르게 출력하기 위해 모았다가 한꺼번에 출력
   const answer = []
   for (const i of input) {
      const int1 = Number(i[0])
      const int2 = Number(i[1])
      // 첫 번째 수가 더 크고 나눠서 떨어지면
      if (int1 > int2 && int1 % int2 == 0) {
         answer.push('multiple')
         // 두 번째 수가 더 크고 나눠서 떨어지면
      } else if (int1 < int2 && int2 % int1 == 0) {
         answer.push('factor')
      } else {
         // 안 나눠지면
         answer.push('neither')
      }
   }
   //조건에 맞게 출력
   console.log(answer.join('\n'))
}

// ─────────────────────────────
// 2501 약수 구하기
// ─────────────────────────────

function A_2501() {
   const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

   const [N, K] = input
   const sqrtN = Math.sqrt(N)
   const firstList = []
   const secondList = []
   let answer
   //조건을 i<=N/2로 하면 약수 다나옴(시간복잡도 O(N/2))
   // i<N제곱근으로 하면 약수 절반만나옴(시간복잡도 O(루트N)), 뒤 절반을 구해야함(시간복잡도는 줄어들긴하는데 코드 길어짐) << 이걸로 ㄱ

   //firstList는 약수를 앞에서부터, secondList는 약수를 뒤에서붙어 만듬
   for (let i = 1; i <= sqrtN; i++) {
      if (N % i == 0) {
         firstList.push(i)
         secondList.push(N / i)
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
      //    Math.ceil(sqrtN) == sqrtN
      if (Number.isInteger(sqrtN)) {
         //제곱수일땐 first와 second에 제곱근이 중복되니 제곱근 제거
         firstList.pop()
      }
      //모든 소수 리스트 result 완성
      const result = firstList.concat(secondList.reverse())

      answer = result.length < K ? 0 : result[K - 1]
   }
   console.log(answer)
}
