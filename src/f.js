setTimeout(() => {
  console.log(1);
}, 0);

setTimeout(() => {
  console.log(2);
});

setTimeout(() => {
  console.log(3);
}, 1);

setTimeout(() => {
  console.log(4);
}, 2);

setTimeout(() => {
  console.log(5);
}, 1);

setTimeout(() => {
  console.log(6);
}, 0);

setTimeout(() => {
  console.log(7);
});

setTimeout(() => {
  console.log(8);
}, 40);

setTimeout(() => {
  console.log(9);
}, 39);


/**
 * Node.js:
 * setTimeout/setInterval 的第二个参数取值范围是：[1, 2^31 - 1]
 * 如果超出这个范围，则会强制将改值设置为1
 * 
 * Chrome V8:
 * 第二个值小于0毫秒, 则设置为0毫秒
 * 如果嵌套级别大于5，并且timeout的值小于4，则将timeout设置为4
 * https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
 * 
 *   Node.js: 1 2 3 5 6 7 4 9 8
 * Chrome V8: 1 2 6 7 3 5 4 9 8
 */
