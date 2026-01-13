const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')

const input = fs.readFileSync(filePath).toString().trim()

//1037 약수
function A_1037() {
   /*제출용
    const fs = require('fs')
    const input = fs.readFileSync(0).toString().trim()
    */
   const [N, divisor] = input.split('\n')

   const list = divisor.split(' ').map(Number)

   let small = list[0]
   let big = list[0]
   for (let i = 1; i < N; i++) {
      if (list[i] > big) big = list[i]
      if (list[i] < small) small = list[i]
   }
   console.log(small * big)
}

//25192 인사성 밝은 곰곰이
function A_25192() {
   /*제출용
const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
    */
   const [N, ...data] = input.split('\n')

   let answer = 0
   for (let i = 0; i < N; i++) {
      const set = new Set()
      while (i < N) {
         const d = data[i]
         if (d === 'ENTER' || i === data.length) break
         set.add(d)
         i++
      }
      answer += set.size
   }
   console.log(answer)
}

//26069 붙임성 좋은 총총이
function A_26069() {
   /*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/

   const [N, ...data] = input.split('\r\n')

   const set = new Set(['ChongChong'])

   for (let i = 0; i < N; i++) {
      const [A, B] = data[i].split(' ')
      if (set.has(A) || set.has(B)) {
         set.add(A)
         set.add(B)
      }
   }

   console.log(set.size)
}

//2108 통계학
function A_2108() {
   /*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/

   const [N, ...data] = input.split('\r\n').map(Number)
   data.sort((a, b) => a - b)

   const avg = Math.round(data.reduce((acc, cur) => acc + cur) / N)
   const mid = data[Math.floor(N / 2)]

   const map = {}
   for (let i of data) {
      if (!map[i]) map[i] = 1
      else map[i]++
   }
   let max = 0
   for (let i of data) {
      if (max < map[i]) max = map[i]
   }
   const set = new Set()
   for (const [key, value] of Object.entries(map)) {
      if (value === max) set.add(Number(key))
   }
   let mode
   if (set.size === 1) {
      mode = Math.min(...set)
   } else {
      set.delete(Math.min(...set))
      mode = Math.min(...set)
   }

   const range = data[N - 1] - data[0]

   console.log(avg + '\n' + mid + '\n' + mode + '\n' + range)
}

//20920 영단어 암기는 어려워

function A_20920() {
   /*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/

   const [NM, ...data] = input.split('\r\n')
   const [N, M] = NM.split(' ').map(Number)
   words = data.filter((e) => e.length >= M)
   words.sort()
   wordCount = []
   let curFreq = 1
   for (let i = 0; i < words.length; i++) {
      if (words[i] === words[i + 1]) {
         curFreq++
      } else {
         wordCount.push([words[i], curFreq])
         curFreq = 1
      }
   }
   wordCount.sort((a, b) => b[1] - a[1] || b[0].length - a[0].length)

   console.log(wordCount.map((e) => e[0]).join('\n'))
}
