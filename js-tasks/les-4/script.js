// Задание 1
for (let i = 0; i < 2; i++) {
  console.log('Привет');
}

// Задание 2
let result = '';
for (let i = 1; i < 6; i++) {
  result += `${i} `;
}
console.log(result);

// Задание 3
result = '';
for (let i = 7; i < 23; i++) {
  result += `${i} `;
}
console.log(result);

// Задание 4
const obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};

for (item in obj) {
  result = `${item} - зарплата ${obj[item]} долларов`;
  console.log(result);
}

// Задание 5
let n = 1000;
let divisionResult = 0;
let num = 0;
while (n >= 50) {
  n /= 2;
  divisionResult = n;
  num += 1;
}

console.log(`Итоговое число ${divisionResult}, количество итераций - ${num}`);

// Задание 6
const dateOfFirstFriday = 7;
let dateOfReportingFrifday = dateOfFirstFriday;
const daysInMonth = 31;
while (dateOfReportingFrifday <= daysInMonth) {
  console.log(
    `Сегодня пятница, ${dateOfReportingFrifday}-е число. Необходимо подготовить отчет.`
  );
  dateOfReportingFrifday += 7;
}
