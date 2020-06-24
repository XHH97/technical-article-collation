let promise1 = new Promise((rej, res)=>{
  setTimeout(()=>{
    rej(10);
  }, 300)
})

promise1.then((num)=>{
  setTimeout(()=>{
    console.log(num);
  }, 400);
})

let promise2 = new Promise((rej, res)=>{
  setTimeout(()=>{
    rej(20);
  }, 0)
})

promise2.then((num)=>{
  setTimeout(()=>{
    console.log(num);
  }, 0);
});

let promise3 = new Promise((rej, res)=>{
  setTimeout(()=>{
    res(10);
  }, 300)
})

promise3.catch((err)=>{
  setTimeout(()=>{
    console.log(err);
  });
})

let value = Promise.all([promise1, promise2, promise3]);
value.then((data)=>{
  console.log(data);
})
value.catch((err)=>{
  console.log(err);
})

let value1 = Promise.race([promise1, promise2, promise3]);
value1

let value2 = Promise.allSettled([promise1, promise2, promise3]);
value2.then((data)=>{
  console.log(data);
});
value2.catch((err)=>{
  console.log(err);
})
let awaitValue = await value2;
awaitValue