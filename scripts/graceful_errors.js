let json = '{"name": "cold valley"}';
try {
  let data = JSON.parse(json);
  let region = data.region;
  if(!region) {
    let makosa = new SyntaxError("check if that property exists");
    throw makosa;
  }

} catch (err) {
  console.log(`error: ${err.name}, stack: ${err.stack}, meso: ${err.message}`);
} finally {
  console.log("i cant find the grace")
}

