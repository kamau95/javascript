//nested try catch finally 
//note that an error thrown by a try is fetched by the catch of the same construct
//an error thrown by a catch or finally can only be catch by external construct not the same construct
try {

  try {
    console.log("testing try catch block");
    throw Error("error to prove a point, second level trycatch");
    console.log("this code will not run");//control already moved to the catch block
  } catch(e) {
    console.log(`the makosa: ${e.name} details: ${e.message}`);
  }
  console.log("safe area");
} catch(error) {
  console.log("ist level catch")
}


//forwading error to the outer trycatch block
try {
  console.log("exploring error handling by try catch block");
  try {
    console.log("this is second level try block");
    throw Error("custom error for just illustration");
  } catch (e) {
    throw e;//rethrowing the error.
  }
} catch(err) {
  console.log(`${err.name} was picked from the second level try block`);
}

// using the try/finally block only
const fs = require("fs");
const writeStream = fs.createWriteStream("nodeFsTest");
try {
  console.log("starting writing...");
  writeStream.write("hi there men");
} finally {
  console.log("closing file...");
  writeStream.end();
}
