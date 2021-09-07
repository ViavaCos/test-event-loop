console.log(1);

new Promise((resolve, reject)=>{
  console.log(2);
})

new Promise((resolve, reject)=>{
  console.log(3);
  resolve()
}).then(() => {
  console.log(4);
})

process.nextTick(() => {
  console.log(5);
})

new Promise((resolve, reject)=>{
  console.log(6);
  resolve()
}).then(() => {
  console.log(7);
})

new Promise((resolve, reject)=>{
  console.log(8);
})

// 1 2 3 6 8 5 4 7
