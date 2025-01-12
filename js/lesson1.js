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

