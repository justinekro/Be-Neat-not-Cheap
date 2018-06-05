const promise = new Promise((resolve, reject) => {
  setTimeout(()=> {
    // resolve('This is my resolved data');
    reject('error, something went wrong...')
  }, 2000)
});

console.log('before')

// promise.then((data) => {
//   console.log(1,data);
// }, (error) => {
//   console.log(error)
// })
//

// OR

promise.then((data) => {
  console.log(1,data);
}).catch((error) => {
  console.log(error)
})

console.log('after')
