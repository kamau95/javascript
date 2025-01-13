function getLastDayOfMonth(year, month) {
  let first_day_next_month = new Date(year, month + 1);
  let first_day_milliseconds = first_day_next_month.getTime();
  let last_day_milliseconds = first_day_milliseconds - 1;
  let last_date = new Date(last_day_milliseconds);
  return last_date.getDate();
}
console.log(getLastDayOfMonth(2012, 1));//29

//using date auto-correction default behaviour
function getLastDayOfMonth1(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(getLastDayOfMonth1(2025, 1)); //28
 console.log(getLastDayOfMonth(2012, 1)); //29
