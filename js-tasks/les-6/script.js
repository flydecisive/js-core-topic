// Задание 1
const numsArr = [1, 5, 4, 10, 0, 3];
for (let num of numsArr) {
  if (num === 10) {
    console.log(num);
    break;
  }

  console.log(num);
}

// Задание 2
const indexOfNum = numsArr.indexOf(4);
console.log(indexOfNum);

// Задание 3
const arrOfNums = [1, 3, 5, 10, 20];
let joinNums = arrOfNums.join(' ');
console.log(joinNums);

// Задание 4
let arr = [];
for (let i = 0; i < 3; i++) {
  let internalArr = [];
  for (let j = 0; j < 3; j++) {
    internalArr.push(1);
  }
  arr.push(internalArr);
}

console.log(arr);

// Задание 5
arr = [1, 1, 1];
for (let i = 0; i < 3; i++) {
  arr.push(2);
}

console.log(arr);

// Задание 6
arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
arr.pop();

console.log(arr);

// Задание 7
arr = [9, 8, 7, 6, 5];
const userPrompt = +prompt('Введите число: ');
const answer = arr.includes(userPrompt);

answer ? alert('Угадал') : alert('Не угадал');

// Задание 8
let str = 'abcdef';
let newStr = [];
for (let el of str) {
  newStr.unshift(el);
}
console.log(newStr.join(''));

// Задание 9
arr = [
  [1, 2, 3],
  [4, 5, 6],
];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    newArr.push(arr[i][j]);
  }
}

console.log(newArr);

// Задание 10
arr = [];
for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
  arr.push(Math.floor(Math.random() * 10 + 1));
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (i + 1 === arr.length) {
    break;
  } else {
    console.log(arr[i] + arr[i + 1]);
  }
}

// Задание 11
// Переиспользую массив с рандомными элементами
newArr = arr.map((el) => el ** 2);
console.log(newArr);

// Задание 12
const getLengthWords = (arr) => {
  const result = arr.map((el) => el.length);
  return result;
};

console.log(
  getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква'])
);

// Задание 13
function filterPositive(array) {
  const newArr = [];
  for (let el of array) {
    if (el < 0) {
      newArr.push(el);
    }
  }

  return newArr;
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

// Задание 14
arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 11);
}

newArr = [];
for (let el of arr) {
  if (el % 2 === 0) {
    newArr.push(el);
  }
}

console.log(arr);
console.log(newArr);

// Задание 15
arr = [];
for (let i = 0; i < 6; i++) {
  arr[i] = Math.floor(Math.random() * 11);
}

const arrLength = arr.length;
sum = 0;

for (let el of arr) {
  sum += el;
}

const result = sum / arrLength;
console.log(result);
