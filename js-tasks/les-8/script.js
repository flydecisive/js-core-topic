// Задание 1
const getResult = (arr, callback) => {
  return callback(arr);
};

const mult = (arr) => {
  let multRes = 1;
  for (let el of arr) {
    multRes *= el;
  }

  return multRes;
};

const sum = (arr) => {
  let sumRes = 0;
  for (let el of arr) {
    sumRes += el;
  }

  return sumRes;
};

console.log(getResult([3, 4, 1, 9], mult));
console.log(getResult([3, 4, 1, 9], sum));

// Задание 2
const users = [
  { name: 'Jon', age: 22 },
  { name: 'Richard', age: 18 },
  { name: 'Anton', age: 32 },
  { name: 'Lida', age: 23 },
  { name: 'Bob', age: 44 },
];

const getSortedArrayObj = (users) => {
  let result = [];

  while (users.length > 0) {
    let index = 0;
    let minAge = users[0].age;

    for (let i = 0; i < users.length; i++) {
      if (minAge > users[i].age) {
        index = i;
        minAge = users[i].age;
      }
    }

    result.push(users[index]);
    users.splice(index, 1);
  }

  return result;
};

console.log(getSortedArrayObj(users));

// Задание 3
const each = (arr, callback) => {
  const result = callback(arr);

  return result;
};

const reversArr = (arr) => {
  return arr.reverse();
};

const toNumberArr = (arr) => {
  let result = [];
  for (let el of arr) {
    if (!isNaN(+el)) {
      result.push(+el);
    }
  }

  return result;
};

console.log(each([1, '4', 9, 'two'], reversArr));
console.log(each([1, '4', false, 9, 'two'], toNumberArr));

// Задание 4
const getDate = () => {
  let date = new Date();
  console.log(date);
};

let timerId = setInterval(() => getDate(), 3000);

setTimeout(() => {
  clearInterval(timerId);
  console.log('30 секунд прошло');
}, 30000);

// Задание 5
function calling() {
  console.log('Звоню!');
}

function beeps() {
  setTimeout(() => {
    console.log('Идут гудки...');
    talk();
  }, 1000);
}

function talk() {
  console.log('Разговор');
}

calling();
beeps();
