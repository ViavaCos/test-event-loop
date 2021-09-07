Promise.resolve().then(() => {
  console.log('p1')
  setTimeout(() => {
      console.log('t1')
      Promise.resolve().then(() => {
          console.log('p4')
      })
  }, 0)
})

setTimeout(() => {
  console.log('t2')
  Promise.resolve().then(() => {
      console.log('p2')
      setTimeout(() => {
          console.log('t3')
      }, 0)
  })
  Promise.resolve().then(() => {
      console.log('p5')
  })
}, 0)


// p1 t2 p2 p5 t1 p4 t3
