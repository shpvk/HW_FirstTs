// let firstName: string = "Tom";
// let age: number = 28;
// let info: string = `Имя ${firstName}    Возраст: ${age}`;
// console.log(info);

// //1. Написать программу, которая предлагает пользователю ввести сумму денежного вклада в гривнах, а также процент
// // годовых, которые выплачивает банк. Определить сумму денег, выплачиваемых банком вкладчику каждый месяц.


// let amountOfMoney:number = 10;
// let interestRate:number = 5;
// console.log(amountOfMoney / interestRate);


// // 2. Сколько товара ценой Y можно купить на Х гривен и сколько получить сдачи?
// let y:number = 55;
// let x:number = 1620;
// let amountOfProduct = x / y;
// let submission = x % y;
// console.log(`Amount of product: ${Math.floor(amountOfProduct)}, submission: ${submission}`)

// 3. Написать программу, которая переводит фунты в килограммы. Один фунт – 405.9 грамма задается в программе как константа. 
// Константа: сколько грамм в одном твоем фунте
const GRAMS_IN_POUND: number = 405.9;
let kg: number = 73;
const pounds: number = (kg * 1000) / GRAMS_IN_POUND;
const roundedPounds: number = Math.floor(pounds);
console.log(`${kg} кг — это ${roundedPounds} полных фунтов (по ${GRAMS_IN_POUND}г каждый).`);


// 4. Ввести длину, ширину и высоту комнаты. Подсчитать, сколько краски уйдет на покраску стен...
let width: number = 4;
let height: number = 3;
let consumptionPerM2: number = 0.5;
let openingPercent: number = 0.2; // 20%

let wallArea: number = 2 * height * (length + width);
let surfaceToPaint: number = wallArea * (1 - openingPercent);
let totalPaint: number = surfaceToPaint * consumptionPerM2;
console.log(`Paint needed: ${totalPaint} liters`);

// 5. Ввести с клавиатуры 3-значное число и «перевернуть» его
let num: number = 358;
let digit1: number = Math.floor(num / 100);
let digit2: number = Math.floor((num % 100) / 10);
let digit3: number = num % 10;
let flipped: number = digit3 * 100 + digit2 * 10 + digit1;
console.log(`Reversed: ${flipped}`);

// ----- Функции -- передаем строго типизированные параметры 

// 6. Написать функцию, которая возвращает куб числа.
function getCube(n: number): number {
    return n ** 3;
}
console.log(`Cube of 3: ${getCube(3)}`);

// 7. Написать функцию для нахождения наибольшего из двух чисел. 
function getMax(a: number, b: number): number {
    return a > b ? a : b;
}
console.log(`Max: ${getMax(10, 25)}`);

// 8. Написать функцию, которая возвращает истину, если передаваемое значение положительное...
function isPositive(n: number): boolean {
    return n >= 0;
}
console.log(`Is 5 positive? ${isPositive(5)}`);

// 9. Написать функцию калькулятор
function add(a: number, b: number): number { return a + b; }
function sub(a: number, b: number): number { return a - b; }
function mult(a: number, b: number): number { return a * b; }
function div(a: number, b: number): number { return b !== 0 ? a / b : 0; }

function calculator(a: number, b: number, action: string): number {
    if (action === "+") return add(a, b);
    if (action === "-") return sub(a, b);
    if (action === "*") return mult(a, b);
    if (action === "/") return div(a, b);
    return 0;
}
console.log(`Calc (10 * 2): ${calculator(10, 2, "*")}`);

// 10. Написать функцию, выводящую на экран прямоугольник с высотой N и шириной K.
function drawRect(n: number, k: number): void {
    for (let i = 0; i < n; i++) {
        console.log("*".repeat(k));
    }
}
drawRect(3, 5);

// 11. Написать функцию, которая проверяет, является ли число простым?
function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(`Is 7 prime? ${isPrime(7)}`);

// 12. Написать функцию, вычисляющую факториал числа.
function getFactorial(n: number): number {
    let res = 1;
    for (let i = 1; i <= n; i++) res *= i;
    return res;
}
console.log(`Factorial 5: ${getFactorial(5)}`);

// 13. Написать функцию: основание степени и показатель степени.
function getPower(base: number, exp: number): number {
    return base ** exp;
}
console.log(`2^10: ${getPower(2, 10)}`);

// 14. Написать функцию: возвращает сумму чисел из диапазона между ними.
function getRangeSum(start: number, end: number): number {
    let sum = 0;
    for (let i = start; i <= end; i++) sum += i;
    return sum;
}
console.log(`Sum from 1 to 5: ${getRangeSum(1, 5)}`);

// 15. Число называется совершенным. Поиск таких чисел во введенном интервале.
function isPerfect(n: number): boolean {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n && n !== 0;
}

function findPerfectInRange(start: number, end: number): void {
    for (let i = start; i <= end; i++) {
        if (isPerfect(i)) console.log(`Perfect number: ${i}`);
    }
}
findPerfectInRange(1, 100);

// 16. Написать функцию, проверяющую является ли параметр алфавитно-цифровым.
function isAlphanumeric(char: string): boolean {
    return /^[a-z0-9]+$/i.test(char);
}
console.log(`Is 'A' alphanumeric? ${isAlphanumeric('A')}`);

// 17. Написать функцию, которая определяет, является ли «счастливым» шестизначное число.
function isLucky(n: number): boolean {
    let s = n.toString();
    if (s.length !== 6) return false;
    let sum1 = Number(s[0]) + Number(s[1]) + Number(s[2]);
    let sum2 = Number(s[3]) + Number(s[4]) + Number(s[5]);
    return sum1 === sum2;
}
console.log(`Is 123321 lucky? ${isLucky(123321)}`);