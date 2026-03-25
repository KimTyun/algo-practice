//1464 1로 만들기
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
   const input = require('fs').readFileSync(0).toString().trim()
   */

//1. 2의 배수면 2로나누기
//2. 3의 배수면 3으로 나누기
//3. 1빼기

//dp[i]는 숫자 i가 1이 되기위해 필요한 최소 횟수
//dp[1] dp[2] dp[3] = 0 1 1

//dp[4]부터는 1,2,3번 방법중 가능한 방법 중에 아래숫자가 가장 작은 경로로 이동하면 됨.
//dp[N]까지 가면 정답을 찾을 수 있긴 한데... 이럼 반드시 O(N)만큼 걸림. 10^6이니 문제는 없긴 한데...

const N = Number(input)
const dp = [0, 0, 1, 1]
const inf = 10000000
for (let i = 4; i <= N; i++) {
   let mod2, mod3, minus
   if (i % 2 === 0) mod2 = dp[i / 2]
   if (i % 3 === 0) mod3 = dp[i / 3]
   minus = dp[i - 1]

   dp[i] = Math.min(mod2 ?? inf, mod3 ?? inf, minus) + 1
}

console.log(dp[N])

//dp[1]에서 부터 dp[N]으로 가는 경로찾기로 풀 수 있지 않을까?
//x2,x3,+1이라는 루트가 있는거고 BFS로 최단경로를 찾는 방식으로 풀면 O(N)보다 적게걸릴것 같은데? 잘모름
