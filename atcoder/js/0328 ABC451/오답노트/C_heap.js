const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'input.txt')
const input = fs.readFileSync(filePath).toString().trim()
/*
 const fs = require('fs')
 const input = fs.readFileSync(0, 'utf8').toString().trim()
 */

const data = input.split('\n').map((e) => e.split(' ').map(Number))
const Q = Number(data[0][0])

class heapQ {
   heap = []
   constructor() {}

   pop() {
      const returnValue = this.heap[0]

      if (this.heap.length === 0) return undefined
      if (this.heap.length === 1) return this.heap.pop()

      const temp = this.heap[this.heap.length - 1]
      this.heap.pop()
      this.heap[0] = temp

      let pointer = 0
      while (pointer * 2 + 1 < this.heap.length) {
         const now = this.heap[pointer]
         const leftPointer = pointer * 2 + 1
         const rightPointer = pointer * 2 + 2

         const left = this.heap[leftPointer]
         const right = this.heap[rightPointer]
         if (left == undefined) break

         if (right == undefined || left <= right) {
            if (left <= now) {
               this.heap[pointer] = left
               this.heap[leftPointer] = now
               pointer = leftPointer
            } else break
         } else if (right <= left) {
            if (right <= now) {
               this.heap[pointer] = right
               this.heap[rightPointer] = now
               pointer = rightPointer
            } else break
         } else break
      }

      return returnValue
   }

   push(x) {
      this.heap.push(x)
      let pointer = this.heap.length - 1
      while (pointer != 0) {
         const now = this.heap[pointer]
         const parentsPointer = Math.floor((pointer - 1) / 2)
         const parents = this.heap[parentsPointer]
         if (now <= parents) {
            this.heap[pointer] = parents
            this.heap[parentsPointer] = now

            pointer = parentsPointer
         } else break
      }
   }
}

const heap = new heapQ()

const answer = []
for (let i = 1; i <= Q; i++) {
   if (data[i][0] == 1) {
      heap.push(data[i][1])
      answer.push(heap.heap.length)
   } else if (data[i][0] == 2) {
      const h = data[i][1]

      while (heap.heap[0] <= h) {
         heap.pop()
      }
      answer.push(heap.heap.length)
   }
}
console.log(answer.join('\n'))
