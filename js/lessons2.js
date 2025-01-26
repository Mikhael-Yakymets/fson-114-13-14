/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tennis',
//   premium: true,
// };

// user.mood = 'happy';
// user.mood = 'skydiving';
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// У нас є об'єкт, у якому зберігаються зарплати
//    нашої команди
//    Напишіть код для підсумовування всіх зарплат і
//    збережіть його результат у змінній sum.
//    Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const emptyObj = {

// }

// function allSalaries (obj) {
//   let sum = 0;

//   for (const key of Object.values(obj)) {
//     sum += key;
//   }
//   return sum;
// }
// console.log(allSalaries(salaries));
// console.log(allSalaries(emptyObj));

/**
//  *? Напишіть ф-цію calcTotalPrice(stones, stonesName),
//  *? яка приймає масив об'єктів та
//  *? рядок під назвою каменю.
//  *? Функція cуммує та повертає загальну вартість каменів
//  *? з таким ім'ям, ціною та кількістю з об'єкта
//  */

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 6 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   for (const stone of stones) {
//     if (stonesName === stone.name) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return `Thia stone does not exist!`;
// }
// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Діаман'));

//Task 4
// Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень
// multiply() перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.val1 = a;
//     this.val2 = b;
//   },
//   sum() {
//     return this.val1 + this.val2;
//   },
//   multiply() {
//     return this.val1 * this.val2;
//   },
// };

// calculator.read(12, 22);
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.multiply());

/**
 *? Напишіть функцію updateObject, яка приймає об'єкт робить копію та повертає
 *? новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') {a: 1, c: 3}
 */

//  const obj = { a: 1, b: 2, c: 3 };

//  function updateObject(object, letter) {
//   const newObj = {...object}
//   delete newObj[letter];
//   return newObj;
// }

// console.log(updateObject(obj, 'a'));
// console.log(obj);

// // *? Зробіть знижку 20% на всі фрукти у масиві
// // *? Надайте ід для кожного продукту

// const fruits = [
//   { name: 'apple', price: 200 },
//   { name: 'orange', price: 300 },
//   { name: 'grapes', price: 750 },
// ];

// function discountFructis(fruitsArr) {
//   const newFruits = [];
//   // for (const fruit of fruitsArr) {
//   //   const copyFruit = { ...fruit };
//   //   copyFruit.id = 'id_' + Date.now() + Math.random().toString(36).substr(2, 9);
//   //   copyFruit.price = copyFruit.price * 0.8;
//   //   newFruits.push(copyFruit);
//   // }
//   for (const fruit of fruitsArr) {
//     const id = 'id_' + Date.now() + Math.random().toString(36).substr(2, 9);
//     newFruits.push({ ...fruit, price: fruit.price * 0.8, id });
//   }
//   return newFruits;
// }
// console.log(discountFructis(fruits));
// console.log(fruits);
