// 18258 큐2

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim().split('\r\n')

class Queue {
   constructor(iterable = null, ...arg) {
      this.queue = {}
      this.front = 0
      this.rear = -1
      if (iterable != null && typeof iterable[Symbol.iterator] === 'function' && typeof iterable !== String) {
         for (const v of iterable) {
            this.rear++
            this.queue[this.rear] = v
         }
      } else {
         if (iterable === null) return
         this.rear++
         this.queue[this.rear] = iterable
      }
      if (arg) {
         for (const v of arg) {
            this.rear++
            this.queue[this.rear] = v
         }
      }
   }
   push(x) {
      this.rear++
      this.queue[this.rear] = x
   }
   pop() {
      const data = this.queue[this.front]
      if (data === undefined) {
         this.front = 0
         this.rear = -1
         return -1
      }
      delete this.queue[this.front]
      this.front++

      return data
   }
   getSize() {
      return this.rear - this.front + 1
   }
   isEmpty() {
      if (this.getSize() === 0) return 1
      else return 0
   }
   getFront() {
      return this.queue[this.front] ?? -1
   }
   getBack() {
      return this.queue[this.rear] ?? -1
   }
}

const queue = new Queue()
const answer = []
for (let i = 1; i <= Number(input[0]); i++) {
   const [order, data] = input[i].split(' ')
   if (order === 'push') {
      queue.push(data)
   } else if (order === 'pop') {
      answer.push(queue.pop())
   } else if (order === 'size') {
      answer.push(queue.getSize())
   } else if (order === 'empty') {
      answer.push(queue.isEmpty())
   } else if (order === 'front') {
      answer.push(queue.getFront())
   } else if (order === 'back') {
      answer.push(queue.getBack())
   }
}

console.log(answer.join('\n'))
