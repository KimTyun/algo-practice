const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

//2164 카드2
function A_2164() {
   const data = Number(input)

   class Queue {
      queue = {}
      front = 0
      rear = -1
      length = 0
      constructor(list) {
         for (let l of list) {
            this.rear++
            this.#setLength()
            this.queue[this.rear] = l
         }
      }

      #setLength() {
         this.length = this.rear - this.front + 1
      }

      shift() {
         if (this.length === 0) return -1
         const data = this.queue[this.front]
         delete this.queue[this.front]
         this.front++
         this.#setLength()
         return data
      }
      push(data) {
         this.rear++
         this.#setLength()
         this.queue[this.rear] = data
      }
   }

   const list = Array.from(new Array(data), (x, index) => index + 1)
   const queue = new Queue(list)

   for (let i = 1; queue.length !== 1; i++) {
      if (i % 2 == 1) {
         queue.shift()
      } else {
         const data = queue.shift()
         queue.push(data)
      }
   }

   console.log(queue.shift())
}

//11866번 요세푸스 문제 0
function A_11866() {
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
}
