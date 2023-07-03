// Задание 1
const getSmallerOfTwoNumbers = (num1, num2) => {
  let smallerNumber;
  smallerNumber = num1 < num2 ? (smallerNumber = num1) : (smallerNumber = num2);

  return smallerNumber;
};

getSmallerOfTwoNumbers(1, 2);

// Задание 2
const determineParityOfNumber = (num) => {
  let numberParity = '';
  numberParity = num % 2 == 0 ? 'Число четное' : 'Число не четное';

  return numberParity;
};

determineParityOfNumber(2);

// Задание 3.1
const getSquareOfNumberInConsole = (num) => {
  const squareOfNumber = num ** 2;
  console.log(squareOfNumber);
};

getSquareOfNumberInConsole(2);

// Задание 3.2
const getSquareOfNumber = (num) => {
  const squareOfNumber = num ** 2;
  return squareOfNumber;
};

getSquareOfNumber(2);

// Задание 4
const greetingByAge = () => {
  const age = +prompt('Сколько тебе лет?');
  if (age < 0) {
    alert('Вы ввели неправильное значение');
  } else if (age > 0 && age < 13) {
    alert('Привет, друг!');
  } else {
    alert('Добро пожаловать!');
  }
};

greetingByAge();

// Задание 5
const getMultOfNumbers = (num1, num2) => {
  let result;
  if (isNaN(+num1) || isNaN(+num2)) {
    result = 'Одно или оба значения не являются числом';
  } else {
    result = num1 * num2;
  }
  return result;
};

console.log(getMultOfNumbers(2, 1));

// Задание 6
const getCubeOfNum = () => {
  const num = +prompt('Введите число: ');
  let result;
  if (isNaN(num)) {
    result = 'Переданный параметр не является числом';
  } else {
    const numCube = Math.pow(num, 3);
    result = `n в кубе равняется ${numCube}`;
  }
  return result;
};

console.log(getCubeOfNum());

// Задание 7
const circle1 = {
  radius: 10,

  getArea() {
    const area = Math.PI * this.radius ** 2;

    return area;
  },

  getPerimeter() {
    const perimeter = 2 * Math.PI * this.radius;

    return perimeter;
  },
};

const circle2 = {
  radius: 5,

  getArea() {
    const area = Math.PI * this.radius ** 2;

    return area;
  },

  getPerimeter() {
    const perimeter = 2 * Math.PI * this.radius;

    return perimeter;
  },
};

console.log(circle1.getPerimeter());
