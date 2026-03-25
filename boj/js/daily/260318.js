const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

//2579 계단 오르기
function A_2579() {
   /*제출용
   const input = require('fs').readFileSync(0).toString().trim()
   */

   //계단은 1칸 혹은 2칸 오를 수 있음.
   //1칸 1칸 오르고 나면 다음은 반드시 한칸 건너뛰어 올라야함

   //dp[i] : [i1,i2,i3] => i-1을 건너뛰었을때(반드시밟음), i-2를 건너뛰었을때(밟을지 건너뛸지 선택), i-3을 건너뛰었을때(반드시건너뜀)
   //i2에서 선택에 따라 뒤의 흐름이 바뀌니까 i2를 i2,i4로 늘려야할듯?
   //[i1,i2,i3,i4]: i-1뛰, i-2뛰&i뛰, i-2뛰&밟, i-3뛰 } 했을 때의 최댓값.

   //계산 어케함?
   //더한다와 건너뛴다로 쪼갠다.
   //각 상황에 더한다와 건너뛴다를 적용한다.
   //i1=>더함, i2=>뛰, i3=>더함, i4=>뛰
   //i1은 i2가됨, i2는 i1이됨, i3은 i4가됨, i4는 i1이됨?
   //i2도 i4도 i1이 되는데?

   /*
i[1]  i-1이 ㅂㄸ
    i는 ㅂ
i[2]  i-1이 ㄸㅂ
    i가 ㅂ
i[3]  i-1이 ㄸㅂ
    i가 ㄸ
i[4]  i-1이 ㅂㅂ
    i는 ㄸ

i+1[1] ㅂ(ㄸㅂ) -> i[2] & i[3]
i+1[2] ㄸ(ㅂㅂ) -> i[4] 
i+1[3] ㄸ(ㅂㄸ) 
i+1[4] ㅂ(ㅂㄸ) -> 둘중 큰수가 i[1]
*/
   const stairs = input.split('\n').map(Number)
   const N = stairs[0]

   let [I1, I2, I3, I4] = [0, 0, 0, 0]
   for (let step = 1; step <= N; step++) {
      const [i1, i2, i3, i4] = [I1 + stairs[step], I2 + stairs[step], I3, I4]
      I2 = i1
      I3 = i1
      I4 = i2
      I1 = Math.max(i3, i4)
   }
   console.log(Math.max(I2, I3, I4))

   // 도착계단은 반드시 밟아야함!!! <= 문제 똑바로 안읽어서 몰랐음
   // 도착계단 시점에서 도착계단을 밟을 수 없는 값은 버려야함.. => I1은 도착계단을 밟지 않으니 빼야함
}

//1464 1로 만들기
function A_1464() {
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
}
