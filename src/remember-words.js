const words = [
  'Яблоко',
  'Груша',
  'Дыня',
  'Виноград',
  'Персик',
  'Апельсин',
  'Мандарин',
];

const rememberWords = (words) => {
  let mixedWords = words.sort(() => Math.random() - 0.5);
  alert(mixedWords.join(', '));
  let userAnswerFirst = prompt(
    'Чему равнялся первый элемент массива?'
  ).toLowerCase();
  let userAnswerSecond = prompt(
    'Чему равнялся последний элемент массива?'
  ).toLowerCase();
  let firstElement = mixedWords[0].toLowerCase();
  let lastElement = mixedWords[mixedWords.length - 1].toLowerCase();
  let result;
  if (userAnswerFirst === firstElement && userAnswerSecond === lastElement) {
    result = 'Поздравляю, вы угадали оба элемента';
  } else if (
    (userAnswerFirst === firstElement && userAnswerSecond !== lastElement) ||
    (userAnswerFirst !== firstElement && userAnswerSecond === lastElement)
  ) {
    result = 'Вы были близки к победе!';
  } else if (
    userAnswerFirst !== firstElement &&
    userAnswerSecond !== lastElement
  ) {
    result = 'Вы ответили не верно';
  }
  alert(result);
};
