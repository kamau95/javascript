//replacing if ..else with ternary operator ?
let message;
let login;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
alert(message);

//ternary(conditional if ?)
let message1 = (login == 'Employee') ? 'Hello':
  (login == 'Director') ? 'Greetings':
  (login == '') ? 'No login':
  ' ';
alert(message1);
