function copySorted(arr) {
  let sorted = arr.slice().sort();
  return sorted;
}
let my_arr = ["mango", "apple", "kiwi"];
console.log(copySorted(my_arr));
