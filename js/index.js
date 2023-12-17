// ------------------ОСНОВНІ ОПЕРАТОРИ----------------------

// + - * / % < > <= >= == === !==

// ДІЯ З ПРИСВОЄННЯМ
// += ,/=, *= ,-=
let num10 = 10;
// Математичні
const inc = 1 + 2;
const dec = 1 - 2;
// / = ділення
const dil = 1 / 2;
// * = Множення
const mnoz = 1 * 2;
// % = остача від ділення
const ostacha = 8 % 7; // 1

num10 += 10; // num10 = num10 + 10 // num10 += 10
num10 -= 10; // num10 = num10 - 10 // num10 -= 10
num10 /= 10; // num10 = num10 / 10 // num10 /= 10
num10 *= 10; // num10 = num10 * 10 // num10 *= 10
num10 %= 10; // num10 = num10 % 10 // num10 %= 10
// console.log(num10);

// console.log(ostacha);

// Порівняння
// ВСІ ОПЕРАТОРИ ПОРІВНЯННЯ ПОВEРТАЮТЬ БУЛЕВІ ЗНАЧЕННЯ (true, false)
//  == - не суворе порівняння(не перевіряє тип данних, перевіряє лише значення)

// == Необхідні випадки або екстренні випадки або випадки виключення(Кастилі)
// == Використовувати майже ніколи
const num = "1" == 1; // 1 і 1 = true

// === суворе порівняння(Порівнює не тільки значення а ї тип данних)
// Використовувати як омога частіше

const num1 = "100" === 100; // "100" i 100 = false

const mid = 50;

const num2 = mid >= 50; // Більше або дорівнює = true
const num3 = mid <= 50; // Менше або дорівнює = true

const num4 = mid > 40; // true
const num5 = mid < 60; // true

// ! - не
// !== не дорівнює
// != не суворе НЕ(не порівнює типи)
// !== суворе НЕ(порівнює типи)
const num6 = mid !== "50"; // false
const num7 = mid != "50"; // true
const isFalse = !true; // false

// console.log(num6);
// console.log(num7);
// console.log(isFalse);

// NAN - not a number = не число

// ------------------------Числа(Number)--------------------
// Приведення до числа( явне і не явне)

// Тому що ми використовуєм неявні приведення до числа наш код важко читати

const isString = +"10"; // Не явне приведення до числа(Складно прочитати )
const isNumber1 = Number("100"); // 100
const isNumber = Number("100і"); // NAN// явне приведення до числа,Може приводити до числа тільки строки які містять тільки число
console.log(isNumber);

// Взяти число з строки (parseint, parsefloat)

const stringNum = "1.2йівфівфіasd3"; // num
console.log(stringNum);
//Number.PARSEINT(cтроку яку бажаєте привести до числа) Повертає цілі чісла
// parse = перебирає отриманні данні і вибирає числа
//int = integer = ціле число

console.log(Number.parseInt(stringNum)); // 1

// Parse float = повертає дробові числа(числа з плаваючою крапкою)
console.log(Number.parseFloat(stringNum)); // 1.2

// Перевірка на число (isNaN)
//NaN = не число
// метод isNan повертає нам значення булеве (true або false)
// Якщо не число === true
console.log(Number.isNaN("asdasd")); // true
// якщо число === false
console.log(Number.isNaN(100)); // false

Number.isNaN("asdasd"); // true
Number.isNaN(100); // false

// ------------ДОДАВАННЯ ЧИСЕЛ З ПЛАВАЮЧОЮ ТОЧКОЮ-----------
// 0.1, 0.2 ,0.3, 0.4.
// --------------------------MATH---------------------------
//Ступені
