//20920 영단어 암기는 어려워

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

/*제출용
const input = require('fs').readFileSync(0).toString().trim()
*/

const [NM, ...data] = input.split('\n')
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

// console.log(wordCount.map((e) => e[0]).join('\n'))
