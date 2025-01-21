//using timeout to print each value after an interval
function printNumbers(from, to) {
  if (from <= to) {
    console.log(from);
    setTimeout( ()=> printNumbers(from + 1, to), 1000);
  }
}
printNumbers(20, 30);

//using setInterval
function printNum(from, to) {
  let current = from;
  let timerId = setInterval( ()=> {
    console.log(current);
    if(current >= to) {
      clearInterval(timerId);
    }
    current++;
  }, 4000);
}
printNum(2, 7);

