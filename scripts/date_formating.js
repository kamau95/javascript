function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMins = diffSec / 60;
  let diffHrs = diffMins / 60;
  //formating
  month = month.toString().padStart(2, '0');
  year = year.toString().slice(-2);
  day = day.toString().padStart(2, '0');
  hrs = hrs.toString().padStart(2, '0');
  mins = mins.toString().padStart(2, '0');

  if (diffSec < 1) {
    return "right now";
  } else if (diffMins < 1) {
    return `${diffSec} sec. ago`;
  } else if (diffHrs < 1) {
    return `${diffMins} min. ago`
  } else {
    return `${day}.${month}.${year} ${hrs}:${mins}`
  }
}

console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
