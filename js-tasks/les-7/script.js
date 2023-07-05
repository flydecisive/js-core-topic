// Задание 1
const lowStr = 'js';
const upStr = lowStr.toUpperCase();

console.log(upStr);

// Задание 2
const searchStart = (arr, str) => {
  const result = [];
  for (let el of arr) {
    el = el.toLowerCase();
    if (el.includes(str.toLowerCase())) {
      result.push(el);
    }
  }

  return result;
};

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3
let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5
const getRandomNum = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

console.log(getRandomNum(1, 10));

// Задание 6
// Переиспользую функцию из задания 5
const getRandomArrNumbers = (num) => {
  const arrLength = Math.floor(num / 2);
  let result = [];
  for (let i = 0; i < arrLength; i++) {
    result[i] = getRandomNum(0, num);
  }

  return result;
};

console.log(getRandomArrNumbers(7));

// Задание 7
// Функция из задания 5

console.log(getRandomNum(2, 15));

// Задание 8
let date = new Date();
console.log(date);

// Задание 9
const currentDate = new Date();
const millisecCurrDate = +currentDate;
const millisecOfFutureDate = 6307200000;
const futureDate = new Date(millisecCurrDate + millisecOfFutureDate);
console.log(futureDate);

// Задание 10
const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const daysOfWeek = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const getCurrentDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfWeek = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log(`${day} ${months[month]} ${year} - это ${daysOfWeek[dayOfWeek]}`);
  console.log(`${hours}:${minutes}:${seconds}`);
};

getCurrentDate(currentDate);
