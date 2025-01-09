const car = {
  make: "benz",
  model: "charger",
  year: "2012"
}
let myObjEntries = Object.entries(car);
console.log(myObjEntries);

for(const [key, value] of myObjEntries) {
  console.log(`${key}: ${value}`);
}
