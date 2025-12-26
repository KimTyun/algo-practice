const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

// ─────────────────────────────
//4948 베르트랑 공준
// ─────────────────────────────
function A_4948() {
   const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)
   input.pop()
   for (const i of input) {
      const [A, B] = [i, 2 * i]

      const isPrime = new Array(B + 1).fill(1)
      isPrime[0] = 0
      isPrime[1] = 0
      for (let i = 1; i * i <= B; i++) {
         if (!isPrime[i]) continue
         for (let j = i * i; j <= B; j += i) {
            isPrime[j] = 0
         }
      }

      let answer = 0
      for (let i = A + 1; i <= B; i++) {
         if (isPrime[i]) answer++
      }

      console.log(answer)
   }
}

// ─────────────────────────────
// 17103 골드바흐 파티션
// ─────────────────────────────
function A_17103() {
   const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

   //1. 백만까지의 소수를 채로 구해놓는다 이 때 list, set 두개로 담아둠. set은 정렬이안되고 list는 조회가 오래걸리니까 둘다 사용
   //2. 리스트에서 N/2까지의 소수p를 검사, N-p가 set 안에 있으면 count++

   //*set만 사용하면 연산이 2배가 되는 대신 list만큼의 메모리 절약 가능?
   const isPrime = new Array(1000001).fill(true)
   isPrime[0] = false
   isPrime[1] = false

   const primeSet = new Set()
   const primeList = []
   for (let i = 2; i * i < isPrime.length; i++) {
      if (isPrime[i]) {
         for (let j = i * i; j < isPrime.length; j += i) {
            isPrime[j] = false
         }
      }
   }
   for (let i = 2; i < isPrime.length; i++) {
      if (isPrime[i]) {
         primeList.push(i)
         primeSet.add(i)
      }
   }
   const T = input[0]
   const answer = []
   for (let i = 1; i <= T; i++) {
      const N = input[i]
      let count = 0
      for (let j = 0; primeList[j] <= N / 2; j++) {
         if (primeSet.has(N - primeList[j])) count++
      }
      answer.push(count)
   }
   console.log(answer.join('\n'))

   //** isPrime[N-p]를 찾으면 소수인지 아닌지 나오기 때문에 Set이 필요없음
}

// ─────────────────────────────
// 13909 창문 닫기
// ─────────────────────────────
function A_13909() {
   const input = fs.readFileSync(filePath).toString().trim()

   const N = Number(input)

   let answer = 0

   //제곱수면 루트씌운값을 1로 나눴을떄 딱 떨어짐
   // for (let i = 1; i <= N; i++) {
   //    if (Math.sqrt(i) % 1 === 0) answer++
   // }
   // 이건 타임아웃 => 최대 21억번이라 O(N)

   // for (let i = 1; i * i <= N; i++) {
   //    answer++
   // }
   // i*i <= N인 자연수 개수 O(sqrt(N))

   answer = Math.floor(Math.sqrt(N))
   // i*i<= N 이 식을 i<=sqrt(N) 으로 바꾼것. i의 최댓값 == i의 개수 O(1)
   console.log(answer)
}
