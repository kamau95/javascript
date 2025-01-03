function sumInput() {
  let numbers = [];
  let sum = 0;
  let collecting = true;
  while(collecting) {
    let value = prompt("enter a number", 0);
    if (value === "" || value === null || isNaN(value)) break;
    numbers.push(+value);
  }
  for(let numb of numbers) {
    sum += numb;
  }
  return sum;
}
alert(sumInput());
