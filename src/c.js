console.log(1);

async function async1(){
  console.log(2);

  await async2();

  console.log(3);

  await test1()

  console.log(4);

  await test2()

  console.log(5);
}

function test1 (){
  console.log(6);
}
function test2 (){
  console.log(7);
}

async function async2(){
  console.log(8);
}

process.nextTick(function(){
  console.log(9);
})

setTimeout(function(){
  console.log(10);
  process.nextTick(function(){
    console.log(11);
  })
  new Promise(function(resolve){
    console.log(12);
    resolve()
  }).then(function(){
    console.log(13);
  })
});

async1()

new Promise(function(resolve){
  console.log(14);
  resolve()
}).then(function(){
  console.log(15);
}).then(function(){
  console.log(16);
})
console.log(17);

/**
 * await的代码相当于.then后面的代码
 * await后的代码晚于 Promise/main()进程代码/process.nextTick
 * Event Loop中每一次循环称为一次tick, 宏任务执行会触发下一次tick, 微任务则不会。
 */

// async function fn1() {
//   await fn2()
//   console.log(2);
// }
// function fn2(){
//   console.log(1);
// }
// // ------> 等同于如下写法
// new Promise(function(resolve){
//   console.log(1);
// }).then(function(){
//   console.log(2);
// })

// 1 2 8 14 17 9 3 6 15 4 7 16 5 10 12 11 13
