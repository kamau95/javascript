function getSecondsToTomorrow(year, month, day, minutes = 0, seconds = 0) {
  let date1 = new Date(year, month, day, minutes, seconds).getTime();
  let date2 = new Date(year, month, day + 1).getTime();
  return (date2 - date1) / 1000;
}
console.log(getSecondsToTomorrow(2025, 0, 13, 23, 58));
