 function getWeekDay(date) {
   let days = ['SU', 'MO', 'TU','WE', 'TH', 'FR', 'SA'];
   return days[date.getDay()];
 }
let date = new Date(2014, 0, 3);  // 3 Jan 2012
console.log( getWeekDay(date) );

 function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;
}
let date1 = new Date(2012, 0, 8);  // 3 Jan 2012
console.log( getLocalDay(date1) );
