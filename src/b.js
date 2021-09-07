console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

const a = new Promise((resolve, reject)=>{
  console.log(3);
  resolve(4)
}).then(res => {
  console.log(res);
}).then(() => {
  console.log(5);
})

a.then(() => {
  console.log(6);
})

const b = new Promise((resolve, reject)=>{
  console.log(7);
  resolve()
}).then(() => {
  console.log(8);
}).then(() => {
  console.log(9);
})

b.then(() => {
  console.log(10);
})

/**
 * 1 3 7 4 8 5 9 6 10 2
 * 
 * Promise每一次.then 都相当于开启一个新的微任务队列
 * 两个promise的第一次，第二次，第三次... 都相对的是同一个队列
 * 只有当首次.then中的代码执行后，第二次.then的代码才会执行
 */
