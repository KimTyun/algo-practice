// 1013 Contact

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split('\r\n')

//(100+1+ | 01)+
//한 덩어리가 100+1+(case A) 혹은 01+(case B)를 만족해야함
// 시작이 1이면 100+1+이고 0이면 01+여야함
//새 덩어리가 1로 시작할 때(100+1+)
const answer = []
for (let i = 1; i < input.length; i++) {
   const wave = input[i]

   //1. 웨이브의 1번재로 시작 케이스 체크
   const start = wave[0]
   let [index, flag] = wave[0] === '1' ? checkCaseA(wave, 0) : checkCaseB(wave, 0)

   while (true) {
      if (flag === 'Done') {
         answer.push('YES')
         break
      } else if (index === -1) {
         answer.push('NO')
         break
      }
      ;[index, flag] = flag === 'A' ? checkCaseA(wave, index) : checkCaseB(wave, index)
   }
}
console.log(answer.join('\n'))
//2. 각 케이스가 완전한지 체크
//2-1 A케이스의 경우 100고정+ 0이 추가적으로 반복 + 1고정 + 1이 추가적으로 반복 형태여야만 함
//2-2 B케이스의 경우 01이 반복 형태여야만 함
//3. 각 케이스가 끝난 **것 같은** 위치 체크
//3-1 A케이스의 경우 1이후 0이 나오면 더이상 A케이스가 아님 - 0 위치를 저장
//3-1A    1이 1번만 나왔다면 반드시 0 다음은 1이 나와야함. 00일 경우 ...100 이라 1이 다음번 A케이스의 일부가 되기 때문에 패턴이 깨지기 때문
//3-1B    1이 2번 이상 나왔다면 0다음 0이나오면 A케이스, 1이 나오면 Bx케이스임

/**
 * start는 1인 시점, number가 wave.length면 통과, -1이면 탈락
 * number가 임의의 숫자이고, string이 'A' 혹은'B'일 경우 number는 A혹은 B케이스의 시작점
 */
function checkCaseA(wave, start) {
   //100 체크구간
   if (wave[start + 1] !== '0' || wave[start + 2] !== '0') return [-1, null]
   let index = start + 3

   //100에서 끝나면 false
   if (index === wave.length) return [-1, null]

   //0 반복구간
   if (wave[index] === '0') {
      while (index < wave.length) {
         if (wave[index] === '0') {
            index++
            continue
         } else break
      }
      //0만 반복하다 문자열이 끝나면 false
      if (index === wave.length) return [-1, null]
   }

   //1 1개인지 체크구간
   if (wave[index] === '1' && wave[index + 1] === '0') {
      //3-1A    1이 1번만 나왔다면 반드시 0 다음은 1이 나와야함. 00일 경우 ...100 이라 1이 다음번 A케이스의 일부가 되기 때문에 패턴이 깨지기 때문
      if (wave[index + 2] === '1') return [index + 1, 'B']
      //1이 1개로 끝났다면 완전한 패턴
      else if (index + 1 === wave.length) return [wave.length, 'Done']
      else return [-1, null]
   }

   //1 n개 체크구간
   while (index < wave.length) {
      if (wave[index] === '1') {
         index++
         continue
      } else {
         //3-1B    1이 2번 이상 나왔다면 0다음 0이나오면 A케이스, 1이 나오면 B케이스임
         if (wave[index + 1] === '0') return [index - 1, 'A']
         else return [index, 'B']
      }
   }

   //1 반복으로 끝났다면 패턴 완성, 이때 index === wave.length
   return [index, 'Done']
}

//3-2 B케이스의 경우 01이 아닌 패턴이 나오면 B케이스가 아님
//3-2A   00, 11은 패턴이 깨진것, 10은 A케이스의 시작임
/**
 * start는 첫 0의 시점, number가 -1이면 탈락, wave.length면 통과
 * number가 임의의 숫자이면 number는 A케이스의 시작점
 */
function checkCaseB(wave, start) {
   let index = start
   while (index < wave.length) {
      const check = `${wave[index]}${wave[index + 1]}`
      if (check === '01') {
         index += 2
         continue
      } else if (check === '10') {
         return [index, 'A']
      } else {
         return [-1, null]
      }
   }
   if (index == wave.length) {
      return [wave.length, 'Done']
   } else {
      return [-1, null]
   }
}
