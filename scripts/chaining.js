let promise = new Promise( (resolve) => {
let ans = 1;
setTimeout( () => resolve(ans), 1000);
}).then( (result) => {
  console.log(result);
  return result * 4;
}).then( (result) => {
  console.log(result);
  return result * 5;
}).then( (result) => {
  console.log(result);
  return result * 3;
})

//returning promises
let promise1 = new Promise( (resolve) => {
  let ans = 4;
  setTimeout( () => {
    resolve(ans);
  }, 3000);
}).then( (result) => {
  console.log(result);
  return new Promise((resolve) => {
    setTimeout( () => resolve(result * 2), 3000);
  })
}).then( (result) => {
    console.log(result);
    return new Promise( (resolve) => {
      setTimeout( () => resolve(result * 0), 3000);
    })
}).then( (result) => {
      console.log(result);
    });
