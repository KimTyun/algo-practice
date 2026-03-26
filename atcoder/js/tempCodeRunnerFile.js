small = names.reduce((prev, cur) => {
   Number(prev[1]) > Number(cur[1]) ? (prev = cur) : (prev = prev)
})
