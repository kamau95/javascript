const leo = new Date();
console.log(leo.toString());//outputs in local time
console.log(leo.toUTCString());//outputs in utc

//own dates
let my_day = new Date(2025, 11, 22, 14, 23, 45, 788);
console.log(my_day.toString());

//function to subtract days from a date
function getDateAgo(date, days) {
  let converted_days = days * 24 * 60 * 60 * 1000 ;
  return new Date(date.getTime() - converted_days);
}

let date = new Date(2015, 0, 2);
let result = getDateAgo(date, 1);

console.log(result.toString());

//doing the same without day conversion
function getDateAgo1(date, days) {
  let copy_date = date;
  copy_date.setDate(date.getDate() - days);
  return copy_date;
}
let date1 = new Date(2015, 0, 2);
let result1 = getDateAgo1(date1, 1);
console.log(result1.toString());

