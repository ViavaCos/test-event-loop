console.log(1)

setTimeout(() => {
  console.log(2);
}, 0);

const p = new Promise(resolve => {
  console.log(3);
  resolve(4)
})

setTimeout(() => {
  console.log(5);
}, 0);

p.then(res => {
  console.log(res);
})

process.nextTick(() => {
  console.log(6);
})

console.log(7);

// 1
// 1 [2]
// 1 3 [2]
// 1 3 [5 2]
// 1 3 [5 2] [4]
// 1 3 [5 2] [4 6] 
// 1 3 7 [5 2] [4 6] 
// 1 3 7 6 4 2 5
