//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'bcde'
// if (str.startsWith('a')) {
//     console.log('Так');

// } else {
//     console.log('Ні');

// }

//TODO: 2 ===================================
// Написати скрипт, який перевіряє чи введене число через
// prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const number = prompt('Введіть число');

// if (number >= 55 && number <= 99  ) {
//     console.log('Число потрапляє в діапазон');

// } else {
//     console.log('Число не потрапляє в діапазон');

// }
// number >= 55 && number <= 99
//   ? console.log('Число потрапляє в діапазон')
//   : console.log('Число не потрапляє в діапазон');

//TODO: 3 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaksim = 101;

// if (ageMaksim >= 0 && ageMaksim <= 16) {
//     console.log("Maksim is children");

// } else if (ageMaksim >= 17 && ageMaksim <= 60) {
//     console.log("Maksim is adult");

// } else if (ageMaksim >= 61 && ageMaksim <= 100) {
//     console.log("Maksim is pensioner");
// } else {
//     console.log("Maksim is pensioner+");

// }

//TODO: 4
// ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const drink = prompt("Enter your drink:")

// function orderDrink(drink) {
//     let price = 0;

//     switch (drink.toLowerCase()) {
//         case "coffe":
//             price = 60;
//             break;
//         case "tea":
//             price = 40;
//             break;
//         case "juice":
//             price = 50;
//             break;
//         default:
//             alert("Error");
//     }

//     return alert(`Your total price is ${price} Uah`);
// }

// orderDrink(drink);

//TODO: 5 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 0;
// const max = 100;
// let total = 0;

// for (let i = max; i >= min; i--) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
//     total += i;
// }

// console.log(total);

//TODO: 6 ===================================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *****

// let star = '*';

// for (let i = 1; i <= 7; i++) {
//    console.log(star);
//    star += '*';
// }

//TODO: 11 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// const number = 30;
// for (let i = 1; i <= number; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('fizzbuzz');
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   } else {
//     console.log(i);
//   }
// }
