//get seconds that have passed since the day started
function getSecondsToday(yr, month, day, hours, minutes = 0, seconds = 0) {
  let date = new Date(yr, month, day, hours, minutes, seconds);
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  let total = (hrs * 3600) + (mins * 60) + sec;
  return total;
}

console.log(getSecondsToday(2025, 0, 13, 23, 49));

