//11866번 요세푸스 문제 0

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

const [N, K] = input.split(' ').map(Number)

const list = Array.from(new Array(N), (x, i) => i + 1)

class CircularList {
   queue = {}
   front = 1
   rear = 0
   pointer = 1
   constructor(list) {
      for (let l of list) {
         this.rear++
         this.queue[this.rear] = { value: l, next: this.rear + 1, before: this.rear - 1 }
      }
      this.queue[this.rear] = { ...this.queue[this.rear], next: this.front }
      this.queue[1] = { ...this.queue[1], before: this.rear }
   }
   move(K) {
      let data
      for (let i = 0; i < K; i++) {
         data = this.queue[this.pointer]
         this.pointer = data.next
      }
      const { value, next, before } = data

      this.queue[before] = { ...this.queue[before], next }
      this.queue[next] = { ...this.queue[next], before }
      return value
   }
}

const queue = new CircularList(list)
const answer = []

while (answer.length !== N) {
   answer.push(queue.move(K))
}
console.log(`<${answer.join(', ')}>`)
