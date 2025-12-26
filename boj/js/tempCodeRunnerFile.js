 input) {
   const [A, B] = [i, 2 * i]

   const isPrime = new Array(B + 1).fill(1)
   isPrime[0] = 0
   isPrime[1] = 0
   for (let i = 1; i * i <= B; i++) {
      if (!isPrime[i]) continue
      for (let j = i * i; j <= B; j += i) {
         isPrime[j] = 0
      }
   }

   const answer = []
   for (let i = A; i <= B; i++) {
      if (isPrime[i]) answer.push(i)
   }

   console.log(answer.length)
}
