function isEmpty() {
  for (let key in bag) {
    return false
  }
  return true;
}
let bag = {};
console.log(isEmpty(bag));
