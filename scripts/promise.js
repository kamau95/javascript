let mathPromise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    let success = Math.random() > 0.5;
    if(success) {
      resolve("congratulations");
    } else {
      reject("you failed");
    }
  }, 2000)
});

  mathPromise.then( (result) => {
    console.log(result);
  })
  .catch( (error) => {
    console.log(error);
  });
