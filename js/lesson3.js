//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const getNewArray = arr => {
//   const newArray = [];
//   arr.forEach(element => {
//     newArray.push(element ** 2);
//   });
//   return newArray;
// };
// console.log(getNewArray(numbers));

// const getNewArray = arr => arr.map(elem => elem ** 2);

// console.log(getNewArray(numbers));

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const flatArray = arr => arr.flatMap(item => item.values);
// console.log(flatArray(data));

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const checkAge = arr => arr.some(item => item.age < 20);

// console.log(checkAge(people));

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const checkEven = arr => arr.every(elem => elem % 2 === 0);

// console.log(checkEven([2, 4, 6, 8, 10]));



//TODO:=========task-05=================
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const findOddElem = (arr) => arr.find(elem => elem % 2 !== 0)
// console.log(findOddElem(numbers));


//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].
// const numbers = [4, 2, 5, 1, 3]

// const sortedArray = arr => arr.toSorted((a, b) => b-a)
// console.log(sortedArray(numbers));
// console.log(sortedArray([4, 2, 5, 1, 3]));


//TODO:===============task-08===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArr = ["banana", "orange", "apple", "pear"]

// const sortStrArr = arr => arr.toSorted((a, b) => a.localeCompare(b))
// console.log(sortStrArr(stringArr));

//TODO:=========task-08=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]


// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const filteredAgeUsers = arr => arr.filter(item => item.age > 20)
// console.log(filteredAgeUsers(user));

//TODO:=========task-09=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5]

// const numbersArr = arr => arr.reduce((acc, number) => acc += number, 0)
// console.log(numbersArr(numbers));


// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// console.log(user.map(item => item.name).toSorted((a,b) => a.localeCompare(b)).find(elem => elem === 'John'));