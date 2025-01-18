let timing = setTimeout( () => console.log("hi lovely people"), 100);
clearTimeout(timing);

let timeId = setInterval( () => console.log("time is ticking"), 100);
setTimeout(() => {clearInterval(timeId); console.log("stop")}, 700);

//nested timeout
let timing1 = setTimeout( () => {
  console.log("request finished");
  timing1 = setTimeout( () => console.log("as planned"), 4000);
}, 4000);
