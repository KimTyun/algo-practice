const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

// ─────────────────────────────
// 24313 알고리즘 수업 - 점근적 표기 1
// ─────────────────────────────
function A_24313() {
   const input = fs.readFileSync(filePath).toString().trim().split('\n')

   const [a1, a0] = input.shift().split(' ').map(Number)
   const [c, n0] = input.map(Number)

   const prove = a1 * n0 + a0 <= c * n0

   if (prove && a1 <= c) console.log(1)
   else console.log(0)
}

// ─────────────────────────────
// 2798 블랙잭
// ─────────────────────────────
function A_2798() {
   const input = fs.readFileSync(filePath).toString().trim().split('\n')

   const M = Number(input.shift().split(' ').pop())
   const numbers = input[0].split(' ').map(Number)

   // console.log(M, numbers)
   let answer = 0

   function roof() {
      //메이플스토리 커닝파퀘 하듯이 다 해보기 (5C3=> 123,124,125,134,135,234,235,245,345)
      for (let i = 0; i < numbers.length; i++) {
         //첫 번쨰 숫자가 M 이상이면 패스
         if (numbers[i] >= M) continue
         for (let j = i + 1; j < numbers.length; j++) {
            //첫 번째 숫자+ 두 번째 숫자가 M 이상이면 패스
            if (numbers[i] + numbers[j] >= M) continue
            for (let k = j + 1; k < numbers.length; k++) {
               //숫자 3개 더해서 M보다 크면 패스, M과 가장 가까우면 결과에 넣음. M이면 정답이니 끝
               const sum = numbers[i] + numbers[j] + numbers[k]
               if (sum <= M && M - sum <= M - answer) answer = sum
               if (answer == M) return answer
            }
         }
      }
      return answer
   }
   console.log(roof())
}

// ─────────────────────────────
// 19532 수학은 비대면강의입니다
// ─────────────────────────────
function A() {
   const input = fs.readFileSync(filePath).toString().trim()

   const [a, b, c, d, e, f] = input.split(' ').map(Number)

   // ax+by = c
   // dx+ey = f

   //  adx+bdy = cd
   //- adx+aey = af
   // -------------
   // bdy-aey = cd-af

   // (bd-ae)y = (cd-af)
   // y= (cd-af)/(bd-ae)
   // x = (cd-bdy)/ad
   let x = 0
   let y = 0
   if (a == 0) {
      y = c / b
      x = (f - e * y) / d
   } else if (b == 0) {
      x = c / a
      y = (f - d * x) / e
   } else if (d == 0) {
      y = f / e
      x = (c - b * y) / a
   } else if (e == 0) {
      x = f / d
      y = (c - a * x) / b
   } else {
      y = (c * d - a * f) / (b * d - a * e)
      x = (c * d - b * d * y) / (a * d)
   }

   console.log(`${x} ${y}`)

   /**
    * 개선점 : 크래머 정리라는걸 쓰면 된다던데 설명 듣고도 모르겟음..
    * 행렬을 안배워서 이해가 안됨 행렬공부를 해야함
    */
}
