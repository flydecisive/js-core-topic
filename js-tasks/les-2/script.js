// task 1
let a = 10;
alert(a);
a = 20;
alert(a);

// task 2
const firstIphoneRealiseYear = '2007';
alert(firstIphoneRealiseYear);

// task 3
const JSCreatorName = 'Brendan Eich';
alert(JSCreatorName);

// task 4
const firstVar = 10;
const secondVar = 2;
const sum = firstVar + secondVar;
const dif = firstVar - secondVar;
const mult = firstVar * secondVar;
const div = firstVar / secondVar;
alert(`Сумма: ${sum}
Разность: ${dif}
Произведение: ${mult}
Частное: ${div}
`);

// task 5
const thirdVar = 2;
const deg = 5;
const result = Math.pow(thirdVar, deg);
alert(result);

// task 6
a = 9;
let b = 2;
const remainderOfDivision = a % 2;
alert(remainderOfDivision);

// task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// task 8
let age = prompt('Сколько вам лет?');
alert(`Вам ${age} лет`);

// task 9
const user = {
  name: 'Maks',
  age: 27,
  isAdmin: true,
};

user['city of residence'] = 'Volgograd';
user.age = 25;
delete user['city of residence'];

const info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// task 10
const userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);
