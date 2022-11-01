/* МАСИВИ */

/* СТВОРЕННЯ ПОРОЖНЬОГО МАСИВУ */
const arrayEmpty = [];

/* СТВОРЕННЯ ПОРОЖНЬОГО МАСИВУ ВИЗНАЧЕНОЇ ДОВЖИНИ, НАПРИКЛАД НА 5 КОМІРОК */
const arrayEmptyWithCells = Array(5);

/* СТВОРЕННЯ МАСИВУ З ВИЗНАЧЕНИМИ ЗНАЧЕННЯМИ (МОЖУТЬ БУТИ ЦИФРИ, РЯДКИ АБО БУЛИНИ) */
const arrayWithItems = [2, 100, 'Hello, world!', true];

/* СТВОРЕННЯ МАСИВУ ЗІ СТРОКИ (ЩОБ В КОЖНОМУ осередку БУВ ОКРЕМИЙ СИМВОЛ) */
const exаmpleString = 'Hello, world!'; // приклад рядка

const arraySplit = exаmpleString.split(''); // 1 спосіб - метод split()
const arrayFrom = Array.from(exampleString); // 2 спосіб - метод Array.from()
const arraySpred = [... exampleString]; // 3 спосіб - метод spred оператора [...]


/* СТВОРЕННЯ МАСИВУ ЗІ СТРОКИ (ЩОБ У КОЖНІЙ осередку БУЛО ОКРЕМЕ СЛОВО) */
const arraySplitWords = exаmpleString.split(''); // вказуємо пробіл як роздільник

/* ЗВОРОТНА ОПЕРАЦІЯ (З ОКРЕМИХ СЛОВ СТВОРЯЄМ СТРОКУ) */
const stringJoin = arraySplitWords.join('');

/* ДІЗНАЄМО ДОВЖИНУ МАСИВУ */
const exampleArray = [2, 12, 24, 100];
console.log(exampleArray.length);


/* ПЕРЕБИРАЄМО МАСИВ */
for (let i = 0; i < exampleArray.length; i++) { // 1 спосіб - можна задати певний початок, кінець і крок, а також реверсом
    console.log(exampleArray[i]);
}

for (const item of exampleArray) { // 2 спосіб - тільки весь масив по одному елементу з початку до кінця
    console.log(item);
}

/* ДОДАЄМО ЕЛЕМЕНТ В КІНЕЦЬ МАСИВУ */
const exampleNumber = 200;
exampleArray.push(exampleNumber); // 1 спосіб - push

exampleArray[exampleArray.length] = 300; // 2 спосіб - length

/* ВИДАЛЯЄМО ЕЛЕМЕНТ В КІНЦІ МАСИВУ */
exampleArray.pop();

/* ДОДАЄМО ЕЛЕМЕНТ НА ПОЧАТОК МАСИВУ */
exampleArray.unshift(exampleNumber);

/* ВИДАЛЯЄМО ЕЛЕМЕНТ НА ПОЧАТКУ МАСИВУ */
exampleArray.shift();

/* ПОШУК ЗНАЧЕННЯ У МАСИВІ */
exampleArray.includes(200);
exampleArray.includes(200, 5); // Через кому можна вказати комірку, з якої починати пошук

/* ДІЗНАТИСЯ НОМЕР КОМІРКИ ПЕВНОГО ЕЛЕМЕНТУ */
exampleArray.indexOf(200); // пошук з початку до кінця, якщо нічого не знайде, поверне -1
exampleArray.lastIndexOf(200); // аналог, тільки пошук з кінця до початку


/* ОБ'ЄДНАЄМО ДВА МАСИВА І ДОДАЄМО НОВІ ЗНАЧЕННЯ */
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg pizza', ...specialty]; // застосовуємо спред-оператор
console.log(pizzas);

/* Копіюємо МАСИВ */
const newPizzas = pizzas.slice();

/* ВИДАЛИТИ ДУБЛІКАТИ З МАСИВУ */
function distinct(arr) {
    return [... new Set(arr)];
}

/* ДРУГИЙ СПОСІБ */
const distinct2 = arr => arr.filter((item, index) => arr.indexOf(item) === index);

/* ПОРАХУВАТИ СУМУ ЧИСЕЛ У ДВОХ МАСИВАХ І СУМУЄМО МІЖ СОБІЙ */
function arrayPlusArray(arr1, arr2) {
    let arr = [... arr1, ... arr2];
    return arr.reduce((a, b) => a + b); // сумуємо суму чисел у масиві між собою
  }

/* ФІЛЬТРУЄМО ЧИСЛА У МАСИВІ ЗА ВИЗНАЧЕНОМУ ОЗНАКУ */
  function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0); // Наприклад, лише числа, кратні певному значенню
  }


  /* РАХУЄМО СУМУ ЧИСЕЛ У МАСИВІВІ МІЖ СОБОЮ (ЯКЩО МАСИВ ПОРОЖНІЙ, ВИВОДИМО 0) */
  function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }


  /* РОЗВЕРТАЄМО МАСИВ У ЗВОРОТНЬОМУ ПОРЯДКУ */
  function reverseList(list) {
    return list.reverse();
  }

/* ЗНАХОДИМО МАКСИМАЛЬНЕ І МІНІМАЛЬНЕ ЗНАЧЕННЯ У МАСИВІ */
const ages = [1984, 1991, 2001];
Math.max(...ages);
Math.min(...ages);


/* ВИБРАТИ З МАСИВУ НЕПАРНІ ЧИСЛА */
function odds(values){
  return values.filter(v => v % 2);
}

/* ПЕРЕВІРЯЄМО ЗНАЧЕННЯ У МАСИВІ БІЛЬШЕ ЧИ НІ ПЕВНОГО ЗНАЧЕННЯ */
function all(arr, fun) {
  return arr.every(fun);
}


/* ВИБИРАЄМО МІНІМАЛЬНУ (АБО МАКСИМАЛЬНУ) ДОВЖИНУ ОКРЕМОГО СЛОВА У МАСИВІ */
const arrStrings = 'Hello, world! I love you!';
const minLength = Math.max(...arrStrings.map(item => item.length));


/* ВИБИРАЄМО З МАСИВУ ЧИСЛА, ЯКІ КРАТНІ СВОЄМУ ІНДЕКСУ */
function multipleOfIndex(array) {
  return array.filter((item, x) => (item % x === 0));
}

/* ДЕСТРУКТУРІЗАЦІЯ МАСИВУ - ВИБИРАЄМО ВИЗНАЧЕНІ ЗНАЧЕННЯ З МАСИВУ І ЗАПИСУЄМО В ЗМІНІ */
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5.

/* ДЕСТРУКТУРІЗАЦІЯ МАСИВУ - ВИБИРАЄМО ПЕРШІ ДВА ЗНАЧЕННЯ ОКРЕМО ЯК ЧИСЛА, А решту МАСИВ ОКРЕМО */
const [a, b, ... arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); //[3, 4, 5, 7]

/* ДЕСТРУКТУРІЗАЦІЯ МАСИВУ І ВИБІР ДАНИХ ЗА ВИЗНАЧЕНИМИ ПРИЗНАКАМИ */
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]); // ['Open', 'Senior', 'Open', 'Senior']
 
/* РОЗРІЗУЄМО МАСИВ ПО ВИЗНАЧЕНОМУ СИМВОЛУ */
function removeUrlAnchor(url){
  return url.split('#')[0];
}

/* ПЕРЕВІРКА КОЖНОГО ЕЛЕМЕНТА МАСИВУ НА ЗНАЧЕННЯ TRUE FALSE */
  const ages2 = [3, 10, 18, 20];
  console.log(ages2.some(age => age > 18)); // true
