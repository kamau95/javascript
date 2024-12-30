function sumInput() {
  let numbers = [];
  let sum = 0;
  let collecting = true;
  while(collecting) {
    let values = prompt("enter numbers to add", 0);
    if(values === null || isNaN(values) || values === "") break;
    numbers.push(Number(values));
  }
  for(let number of numbers){
    sum += number;
  }
  return sum;
}
console.log(sumInput());
