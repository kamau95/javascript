let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  ++i;
}

//0,2,4
for (let j = 0; j < 5; j++) {
  console.log(j++);
}

//changing switch to if
let browser1 = "Safari"; 
switch (browser1) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}

//conversion
let browser = "Opera";
if (browser == "Edge") {
  console.log("You've got the Edge");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
  console.log('Okay we support these browsers too');
} else {
  console.log('We hope that this page looks ok!');
}
