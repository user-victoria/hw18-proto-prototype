// 1. Створити окремий файл
// 2. Проставити true || false навпроти кожного console.log
// 3. Під кожним console.log() - написати в коментарях пояснення

console.log({}.prototype === {}.prototype); // true
/*
    це 2 порожні об'єкти, які не мають [[Prototype]] тому відповідь undefined,
    тобто undefined === undefined буде true
*/

function sayHello() { };
console.log(sayHello.prototype === sayHello.__proto__); // false
/*
    sayHello.prototype це не функція конструктор, тобто має бути Function.prototype,
    тому sayHello.__proto__ не має на неї посилання
*/

function sayHello() { };
function sayGoodBye() { };
console.log(sayHello.__proto__ === sayGoodBye.__proto__); // true
/*
    тому що вони мають однакові посилання, тобто вони створені від однакових типів об'єктів,
    в цьому випадку це Function
*/
console.log(sayHello.prototype === sayGoodBye.prototype); // false
/*
    в обох цих функціях є [[Prototype]], але у кожної він свій
*/

let arrowFunc = () => { };
console.log(arrowFunc.prototype === Object.prototype); // false
/*
    по-перше, стрілочна функція не має [[Prototype]],
    по-друге, Object.prototype має [[Prototype]],
    тому undefined === [[Prototype]] буде false
*/

let age = 22;
console.log(age.prototype === Number.prototype); // false
/*
    [[Prototype]] є у функціях окрім стрілочної,
    тому age.prototype = undefined
*/
console.log(age.__proto__ === Number.prototype); // true
/*
    тому що було створено за допомогою функції конструктора new Number,
    і ця функція конструктор надала доступ до свого [[Prototype]]
*/

function Test() { }
console.log(Test.__proto__ === Function.prototype); // true
/*
    тому що було створено за допомогою функції конструктора new Function,
    і ця функція конструктор надала доступ до свого [[Prototype]]
*/

let num = 77;
console.log(num.__proto__ === Number.prototype); // true
/*
    тому що було створено за допомогою функції конструктора new Number,
    і ця функція конструктор надала доступ до свого [[Prototype]]
*/