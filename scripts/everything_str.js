//changes the first character of a string to uppercase
function ucFirst(str) {
  let newStr = str.slice(0,1).toUpperCase() + str.slice(1);
  console.log(newStr);
}
ucFirst("karanja");

//looking for a substring inside a string - case insensitive
function checkSpam(str) {
  let lower_str = str.toLowerCase();
  if (lower_str.includes('viagra') || lower_str.includes('XXX')) {
    return true
  } else {
    return false
  }
}
console.log(checkSpam('buy ViAgRA now'));

//a string must not exceed certain length
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    console.log(+str.slice(0, maxlength - 1) + "...");
  } else {
    console.log(str);
  }
}
truncate("linus was very happy today", 20)

//$56 extract just the amount
function extractCurrencyValue(str) {
  console.log(str.slice(1));
}
extractCurrencyValue("$56");
