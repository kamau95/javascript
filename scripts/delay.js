let promise = new Promise( (resolve, reject) => {
  let check = true;
  //this is synchronous
  if (check) {
    resolve("the promise resolved successfully")
  } else {
    reject("the state moved to failure")
  }
});
promise.then((result) => {
  console.log(result);
})
  .catch( (error) => {
    console.log(error)
  });


let promise2 = new Promise( (resolve, reject) => {
  let check = false;
  //this is asynchronous
  setTimeout( () => {
    if(check) {
      resolve("always get it right")
    } else {
      reject(" fail fail fail")
    }
  }, 4000);
});
promise2.then( (result) => {
  console.log(result);
})
.catch( (error) => {
  console.log(error)
});

