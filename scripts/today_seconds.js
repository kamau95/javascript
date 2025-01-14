function getSecondsToday(year, month, day, hours = 0, minutes = 0, seconds = 0) {
  let start_of_day = new Date(year, month, day).getTime();
  let end_of_day = new Date(year, month, day, hours, minutes, seconds).getTime();
  let seconds_passed = (end_of_day - start_of_day) / 1000;
  return seconds_passed;
}
console.log(getSecondsToday(2025, 0, 13, 23, 49, 54));
