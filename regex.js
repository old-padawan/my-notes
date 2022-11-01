// РЕГУЛЯРНІ ВИРАЗИ
/*

  . Збіг будь-якого одного символу
  "." Все, що у лапках, буквально
  A* Нуль або кілька входжень A
  A+ Одне або кілька входжень A
  А? Нуль або одне входження A
  A/B відповідає A, тільки якщо за ним слідує B
  () серія регулярних виразів, згрупованих разом
  [] Відповідає будь-якому символу у дужках
  [^] Не співпадати з жодним символом у дужках, наприклад [^0-9] - все, крім цифр
  [-] Визначити діапазон символів для відповідності, наприклад [a-z0-9]
  ^ Збіг з початком нового рядка, наприклад /^T/ рядок, який починається на велику Т
  $ Відповідає кінцю рядка
  {} Кількість елементів набору збігів із зразком, наприклад {3, 5} де 3 -мінімальне значення збігів, 5 - максимальне
  екранує метасимволи, наприклад точку, тег, кому і т.д.
  | оператор АБО
  \d - одна будь-яка цифра
  \D - все що завгодно, крім цифр
  \s - пробіл
  \S - все, крім пропусків
  \n - перенесення рядка
  \w - будь-яка буква
  \W - все, окрім букв і цифр
  \b - межа слова, наприклад, слово з трьох літер /\b\w\w\b/
  \B - все, крім кордонів (між літерами)

  Квантифікація
  /\b\w{3}\b/ - вказуємо, скільки разів має повторитися

  Угруповання
  (\s|-) можлива прогалина або дефіс
  [\s-] аналог
  
*/


/* ШУКАЄМО СЛОВО В ПРОПОЗИЦІЇ */
const sentence1 = 'The dog chased the cat';
const result1 = /the/.test(sentence1);
console.log(result1); // true

/* ШУКАЄМО СЛОВА В ПРОПОЗИЦІЇ (ОПЕРАТОР АБО) */
const sentence2 = "James has a pet cat.";
const result2 = /dog|cat|bird|fish/.test(sentence2);
console.log(result2); // true

/* ШУКАЄМО СЛОВА В НЕЗАЛЕЖНОСТІ ВІД РЕЄСТРА БУКВ */
const sentence3 = "freeCodeCamp";
const result3 = /freecodecamp/i.test(sentence3); // прапорець незалежності регістру
console.log(result3); // true

/* ШУКАЄМО СЛОВO (СЛОВА) І ВИНЯТАЄМО РЕЗУЛЬТАТ З РЯДКУ */
const sentence4 = "Extract the word 'coding' з цього string.";
const result4 = sentence4.match(/coding/); //якщо кілька однакових слів, без урахування регістру, додаємо прапори gi
console.log(result4);

/* Шукаємо слова за маскою за допомогою крапки, яка означає будь-який символ */
const sentence5 = "Літ's have fun with regular expressions!";
const regex5 = /.un/g; // Глобальний прапорець
const result5 = regex5.test(sentence5);
console.log(result5); // true

/* ВИНЯТАЄМО ВСІ ГОЛОСНІ ІЗ ПРОПОЗИЦІЇ */
const sentence6 = "Beware of bugs in the above code; I тільки надана it correct, not tried it.";
const regex6 = /[aeuio]/gi;
const result6 = sentence6.match(regex6);
console.log(result6);


/* ВИНЯТАЄМО ЛІТЕРИ В ДІАПОЗОНІ ВІД І ДО */
const sentence7 = "The quick brown fox jumps over the lazy dog.";
const regex7 = /[a-z]/gi;
const result7 = sentence7.match(regex7);
console.log(result7);


/* ВИНЯТАЄМО ЛІТЕРИ І ЦИФРИ В ДІАПОЗОНІ ВІД І ДО */
const sentence8 = "Blueberry 3.141592653s are delicious.";
const regex8 = /[h-s2-6]/ig;
const result8 = sentence8.match(regex8);
console.log(result8);

/* РЯДКИ УТРИМУЄ ТІЛЬКИ УНІКАЛЬНІ СИМВОЛИ */
function hasUniqueChars(str) {
  return !/(.).*\1/.test(str);
}


/* ВИКЛЮЧАЄМО ЦИФРИ І ГОЛОСНІ, ВИНЯТАЄМО ІНШЕ */
const sentence9 = "3 blind mice.";
const regex9 = /[^aeiuo^0-9]/gi;
const result9 = sentence9.match(regex9);
console.log(result9);


/* ВИНЯТАЄМО БУКВУ АБО ЇЇ ПОВТОРИ */
const sentence10 = "Mississippi";
const regex10 = / s + / gi;
const result10 = sentence10.match(regex10);
console.log(result10);


/* ВИНЯТАЄМО БУКВУ АБО ЇЇ ПОВТОРИ */
const sentence11 = "Aaaaaaaaaaaaaaaarrrgh!";
const regex11 = /Aa * /;
const result11 = sentence11.match(regex11);
console.log(result11);


/* ВИНЯТО ТЕГ HTML */
const sentence12 = "<h1>Winter is coming</h1>";
const regex12 = /<.*?>/; // Змініть цей рядок
const result12 = sentence12.match(regex12);
console.log(result12);

/* ЗМІНИТИ ПЕРШУ БУКВУ КОЖНОГО СЛОВА НА ВЕЛИКУ */
const sentence13 = "this is an example.";
const result13 = sentence13.replace(/\b\w/g, x => x.toUpperCase());
console.log(result13);


/* ЗМІННІ У РЕГУЛЯРНИХ ВИРАЗАХ */

/* ПЕРЕВІРЯЄМО ЧИ МІСТЬ ЗАКІНЧЕННЯ ОДНОГО РЯДКУ В СЕБЕ ІНШИЙ РЯДОК */
function solution (str, ending) {
  console.log(new RegExp(`${ending}$`).test(str));
}

solution('abcde', 'cde'); // true
solution('abcde', 'abc'); // false


/* ПЕРЕВІРЯЄМ НАЯВНІСТЬ АБО ВІДСУТНІСТЬ ВИЗНАЧЕНИХ ЛІТЕРІВ У ДАНОМУ РЯДКУ */
function strCount(str, letter){
  const regex = new RegExp(`${letter}`, 'gi'); // Прапорці глобального пошуку та ігнорування регістру пишуться через кому
  return regex.test(str) ? str.match(regex).length : 0;
 }


/ * ПЕРЕВІРКА ПАРОЛЯ, ТЕЛЕФОНУ І Т.Д. */

/* Шукаємо від 3 до 6 символів і хоча б одне число */
const password = "abc123";
const checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

/* ПЕРЕВІРЯЄМО КОРЕКТНІСТЬ ВВЕДЕННЯ НОМЕРУ ТЕЛЕФОНУ */
const regexTel = /\+38\(\d{3}\)/; // Наприклад, +38(050)


/* РОБОТА З ГРУПАМИ */

/* ШУКАЄМО СЛОВА І ЗМІНЮЄМО ЇХ МІСЦЯМИ */
let str = "one two three";
let fixRegex = /(w+) (w+) (w+)/g;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
