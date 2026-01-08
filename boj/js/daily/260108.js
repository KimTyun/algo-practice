//28729 덱2

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')

const input = fs.readFileSync(filePath).toString().trim()

const data = input.split('\r\n')
const N = Number(data[0])

class Deque {
   deque = {}
   rear = -1
   front = 0
   length = 0

   #setLength() {
      this.length = this.rear - this.front + 1
   }
   getLength() {
      this.#setLength()
      return this.length
   }

   append(data) {
      this.rear++
      this.length++
      this.deque[this.rear] = data
   }
   pop() {
      const data = this.deque[this.rear]
      if (data) {
         delete this.deque[this.rear]
         this.rear--
         this.length--
      }
      return data ?? -1
   }
   appendleft(data) {
      this.front--
      this.length++
      this.deque[this.front] = data
   }
   popleft() {
      const data = this.deque[this.front]
      if (data) {
         delete this.deque[this.front]
         this.front++
         this.length--
      }
      return data ?? -1
   }

   getSide() {
      return [this.deque[this.front] ?? -1, this.deque[this.rear] ?? -1]
   }

   isEmpty() {
      return this.length === 0 ? 1 : 0
   }

   constructor() {}
}

const deque = new Deque()
const answer = []
for (let i = 1; i <= N; i++) {
   const [order, x] = data[i].split(' ').map(Number)
   switch (order) {
      case 1:
         deque.appendleft(x)
         break
      case 2:
         deque.append(x)
         break
      case 3:
         answer.push(deque.popleft())
         break
      case 4:
         answer.push(deque.pop())
         break
      case 5:
         answer.push(deque.getLength())
         break
      case 6:
         answer.push(deque.isEmpty())
         break
      case 7:
         answer.push(deque.getSide()[0])
         break
      case 8:
         answer.push(deque.getSide()[1])
         break

      default:
         break
   }
}

console.log(answer.join('\n'))
