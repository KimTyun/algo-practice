//1149 RGB거리

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
   const input = require('fs').readFileSync(0).toString().trim()
   */

// 앞, 뒤 집 색이 달라야함.
/*
//한 집의 색 비용을 쌈/중간/비쌈으로 봤을때, 싼 것만 고르는 루트가 가능하면 그게 정답임.
// 근데 싼 루트가 겹칠 때는? 쌈+중간 과 중간+쌈 중에 싼 걸 택하면 될듯?
// 근데 쌈+중간 이후 중간과 다음 쌈이 겹치면?
//ex) 1,100, 1000/ 2, 10, 10000/ => 1+10 과 100+2를 비교-> 쌈중간으로 ㄱ
// 1,100,1000/2,10,10000/1000,1,900/ 1+10[+900]과 100+2[+1] 비교 -> 중간쌈쌈으로 ㄱ

// 근데 그다음 쌈이 겹치면? 그그다음? 그그그그?
//1,100,1000/2,10,10000/1000,1,900/100,1,10/ 1+10+900[+1]과 100+2+1[+10] 비교 ->

// => 결론적으로 제일 싼 루트와 두번째로 싼 루트가 엎치락 뒤치락 함. => 두 개의 루트를 둘다 저장하면서 더해나가면 됨.
// 루트 2개가 뭐임? => 쌈의 색이 같을 때 쌈+중간 루트와 중간+쌈 루트, 쌈 색이 다르면 두 루트의 지나가는 길이 같음.
// 근데 쌈쌈 중 or 쌈 중중 or 쌈쌈쌈 등이 가능하기 때문에 루트가 3개 필요할 듯?
// 1,2,2 | 1, 100,100 이면 2 1 하면되고
//routeA와 routeB에 값을 누적해서 더해간 뒤에 최종적으로 두 값중 싼 값이 정답
*/
const houses = input.split('\n').map((e) => e.split(' ').map(Number))
const N = houses[0][0]

//이전 1번을 택했을 때의 최소값
let routeA = houses[1][0]
//이전 2번을 택했을 때의 최소값
let routeB = houses[1][1]
//이전 3번을 택했을 때의 최소값
let routeC = houses[1][2]

for (let i = 2; i <= N; i++) {
   const tempA = routeB <= routeC ? routeB + houses[i][0] : routeC + houses[i][0]
   const tempB = routeA <= routeC ? routeA + houses[i][1] : routeC + houses[i][1]
   const tempC = routeA <= routeB ? routeA + houses[i][2] : routeB + houses[i][2]

   routeA = tempA
   routeB = tempB
   routeC = tempC
}
const answer = Math.min(routeA, routeB, routeC)

console.log(answer)
