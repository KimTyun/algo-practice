const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../input.txt')
const input = fs.readFileSync(filePath).toString().trim()

// ─────────────────────────────
// 18870번 좌표압축
// ─────────────────────────────
function A_18870() {
   const numbers = input
      .split('\r\n')[1]
      .split(' ')
      .map((e) => BigInt(e))

   const numSort = [...new Set(numbers)].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))

   // indexOf로 numSort에서 찾아가기 = O(N**2), 딕셔너리 만들어놓고 검색하기 - 만드는데 O(N),모두 변환하는데 O(N)
   const dic = {}
   for (const i in numSort) {
      dic[numSort[i]] = i
   }

   const answer = []
   for (number of numbers) {
      answer.push(dic[number])
   }

   console.log(answer.join(' '))
}

// ─────────────────────────────
// 10815 숫자 카드
// ─────────────────────────────
function A_10815() {
   const input2 = input.split('\r\n')

   const numbersN = input2[1].split(' ').map(Number)
   const numbersM = input2[3].split(' ').map(Number)

   const dicN = {}
   numbersN.forEach((e) => (dicN[e] = 1))

   const answer = numbersM.map((e) => (dicN[e] ? 1 : 0))

   console.log(answer.join(' '))
}

// ─────────────────────────────
// 14425 문자열 집합
// ─────────────────────────────
function A_14425() {
   const input2 = input.split('\r\n')
   const [N, M] = input2.shift().split(' ').map(Number)
   const words = input2
   const nWord = new Set()
   for (let i = 0; i < N; i++) {
      nWord.add(words[i])
   }

   let answer = 0
   for (let i = N; i < words.length; i++) {
      if (nWord.has(words[i])) answer++
   }

   console.log(answer)
}

// ─────────────────────────────
//7785 회사에 있는 사람
// ─────────────────────────────
function A_7785() {
   const input2 = input.split('\r\n')
   const set = new Set()

   for (let i = 1; i < input2.length; i++) {
      const [name, check] = input2[i].split(' ')
      if (check == 'enter') set.add(name)
      else set.delete(name)
   }

   console.log([...set].sort().reverse().join('\n'))
}

// ─────────────────────────────
//1620 나는야 포켓몬 마스터 이다솜
// ─────────────────────────────
function A_1620() {
   const input2 = input.split('\r\n')
   const [N, M] = input2[0].split(' ').map(Number)

   const dic = {}
   const answer = []
   //딕셔너리 value로 key 찾으려면 find하고 어쩌구 해야함.
   //걍 key-value를 한쌍 만들면 되는거 아님?
   for (let i = 1; i <= N; i++) {
      dic[i] = input2[i]
      dic[input2[i]] = i
   }
   for (let i = N + 1; i < input2.length; i++) {
      answer.push(dic[input[i]])
   }
   console.log(answer.join('\n'))
}

// ─────────────────────────────
//10816 숫자 카드 2
// ─────────────────────────────
function A_10816() {
   const input2 = input.split('\r\n')

   const numbersN = input2[1].split(' ')
   const numbersM = input2[3].split(' ')

   const dic = {}
   const answer = []
   for (const number of numbersN) {
      dic[number] ? (dic[number] += 1) : (dic[number] = 1)
   }
   for (const number of numbersM) {
      answer.push(dic[number] ? dic[number] : 0)
   }
   console.log(answer.join(' '))
}
