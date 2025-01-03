let arr = [100, -9, 2, -3, 5];
//a function to find the maximum sum of of contiguous subarrays
let maxSubArray = (array) => {
  let currentSum = 0;
  let largestSum = 0;
  for(let number of array) {
    currentSum = Math.max(0, (currentSum + number));
    largestSum = Math.max(currentSum, largestSum);
  }
  return largestSum
}
console.log(maxSubArray(arr));
