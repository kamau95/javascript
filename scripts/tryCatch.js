let json = "{bad json}";

try {

  let user = JSON.parse(json);
  console.log(user.name);

} catch (err) {
  console.log(err.name);
  console.log(err.message);
}

let json1 = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json1);
  if (!user.name) {
    throw new SyntaxError("incomplete data: no name")
  }
  console.log(user.name);

} catch(err) {
  console.log(`JSON error: ${err.message}`);
}
