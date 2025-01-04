let numbers = [1,2,3,4,5,6,7,8];
for(let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 7) {
    numbers.splice(i, 1);
  }
}
console.log(numbers);

//multiple deletes following a condition
let scores = [233, 340, 506, 300, 420, 123, 608, 400, 304];
for(let i = 0; i < scores.length; i++) {
  if (scores[i] < 300 || scores[i] > 600) {
    scores.splice(i, 1);
    i--;
  }
}
console.log(scores);

function filterRangeInPlace(arr, a, b) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
let arr1 = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr1, 1, 4));
