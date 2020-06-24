// const add = import('./2.js');
// import add from './2.js';

// let value = add(10, 20);
let promise1 = new Promise((rej, res)=>{
  setTimeout(()=>{
    rej(10);
  }, 300)
})

promise1.then((num)=>{
  setTimeout(()=>{
    console.log(num);
  }, 400);
});

console.log(await promise1);

// console.log(add);
console.log('1');