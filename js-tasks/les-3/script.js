// Задание 1
let password = 'password';
let userPassword = prompt('Введите пароль: ');

if (password === userPassword) {
  alert('Пароль введен верно');
} else {
  alert('Пароль введен неправильно');
}

//Задание 2
let c = 2;
if (c > 0 && c < 10) {
  alert('Верно');
} else {
  alert('Неверно');
}

// Задание 3
let d = 100;
let e = 101;
if (d > 100 || e > 100) {
  alert('Верно');
} else {
  alert('Неверно');
}

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = 12;
let season = '';
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    season = 'Зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'Весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'Лето';
    break;
  case 9:
  case 10:
  case 11:
    season = 'Осень';
    break;
  default:
    alert('Нет такого месяца');
    break;
}

alert(season);

// Задание 7
let enterNum = prompt('Пожалуйста, введите любое число');
let num = Number(enterNum);
if (num) {
  if (num % 2 === 0) {
    alert('Число четное');
  } else {
    alert('Число нечетное');
  }
} else {
  alert('Вы ввели не число');
}

// Задание 8
let clientOS = 1;
let message = '';
switch (clientOS) {
  case 0:
    message = 'Установите версию приложения для iOS по ссылке';
    break;
  case 1:
    message = 'Установите версию приложения для Android по ссылке';
    break;
  default:
    message = 'Нет такой операционной системы';
    break;
}
console.log(message);

// Задание 9
let clientDeviceYear = 2015;
if (clientDeviceYear < 2015) {
  switch (clientOS) {
    case 0:
      message = 'Установите облегченную версию приложения для iOS по ссылке';
      break;
    case 1:
      message =
        'Установите облегченную версию приложения для Android по ссылке';
      break;
    default:
      message = 'Нет такой операционной системы';
      break;
  }
} else {
  switch (clientOS) {
    case 0:
      message = 'Установите версию приложения для iOS по ссылке';
      break;
    case 1:
      message = 'Установите версию приложения для Android по ссылке';
      break;
    default:
      message = 'Нет такой операционной системы';
      break;
  }
}

console.log(message);
