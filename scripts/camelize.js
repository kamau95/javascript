// functions below takes a string(str_joined_dash)
// converts it to an array by splitting then applies 
// some logic to get this (StrJoinedDash)
function camelize(str) {
  let arr = str.split('-');
  let camelized_word = '';
  for(let item of arr) {
    let first_letter =  item.charAt(0).toUpperCase();
    let body = item.slice(1);
    let final_word = first_letter + body;
    camelized_word += final_word;
  }
  return camelized_word;
}
console.log(camelize("school-made-for-the-rich"));


function camelized(str) {
  let arr = str.split('-');
  let camel_words_array = arr.map( (item) => {
    let first_letter = item.charAt(0).toUpperCase();
    let remainder = item.slice(1);
    return first_letter + remainder;
  });
  let my_str = camel_words_array.join('');
  return my_str;
}
console.log(camelized("happy-souled-deals"));
