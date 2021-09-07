console.log(1)

setTimeout(() => {
  console.log(2);
}, 0);

const p = new Promise(resolve => {
  console.log(3);
  resolve()
}).then(() => {
  console.log(4);
})

setTimeout(() => {
  console.log(5);
}, 0);

p.then(() => {
  console.log(6);
})

p.then(() => {
  console.log(7);
})

const q = new Promise(resolve => {
  console.log(8);
  resolve()
})

process.nextTick(() => {
  console.log(9);
})

p.then(() => {
  console.log(10);
})

q.then(() => {
  console.log(11);
})

q.then(() => {
  console.log(12);
})

p.then(() => {
  console.log(13);
})

console.log(14);

q.then(() => {
  console.log(15);
})

process.nextTick(() => {
  console.log(16);
})

const a = new Promise(resolve => {
  console.log(17);
  resolve()
})
a.then(() => {
  console.log(18);
})

const b = new Promise(resolve => {
  console.log(19);
  resolve()
}).then(() => {
  console.log(20);
})

b.then(() => {
  console.log(21);
})



// 1 3 8 14 17 19 9 16 4 11 12 15 18 20 6 7 10 13 21 2 5

/**
 * 压入main()到执行栈
 * 执行宏任务
 * 执行栈弹出main()
 * new Promise执行
 * process.nextTick()执行
 * new Promise.then 执行
 * ??? Promise的实例.then执行
 * setTimeout执行
 */
