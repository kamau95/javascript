function fetchData () {
  let json = '{"age": "thirty"}';

  try {
    let data = JSON.parse(json);
    if (!data.name) {
      throw new TypeError("incomplete data")
    }

    blabla();

    console.log(data.name);

  } catch (err) {
    if( err instanceof TypeError) {
      console.log(`Json error: ${err.name}`);
    } else {
      throw err;
    }
  }
}

try {
  fetchData();
} catch (err) {
  console.log(`external catch got: ${err.name}`);
}


