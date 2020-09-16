// //1. Створити масив у якому буде 3 юзера описані як обєкти з 
// //такими полями - age, name, hobby (теж повинно бути
// //масивом ).
let user1 = {
  age: 18,
  name: 'Pedro',
  hobby: ['tequila', 'clubs', 'drum-n-bass'],
};
let user2 = {
  age: 28,
  name: 'Diego',
  hobby: ['beer', 'burp', 'sleep'],
};
let user3 = {
  age: 38,
  name: 'Pepe',
  hobby: ['whiskey', 'girls', 'rock-n-roll'],
};
let arr = [user1, user2, user3];

console.log(arr);

// // 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі 
// // конвертації - у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює 
// // вас юзер і перевіряти чи не прийшов вам null or undefined. 
let uah = +prompt('Скільки в тебе є гривень?');
let convertUsd = (uah / 28.2);
let convertEur = (uah / 33.1);
let convertBrent = (uah / 1146);
let convertGold = (uah / 1871);

if (uah === null) {
  alert('Шойто я не пойняв!');
  } else if (uah === undefined) {
      alert('Шойто я не пойняв!');
  } else {
    alert(`${uah} гривень - конвертуються в ${convertUsd.toFixed(2)} доларів США, або в ${convertEur.toFixed(2)} євро, або в ${convertBrent.toFixed(2)} барелів нафти марки Brent, або в ${convertGold.toFixed(2)} грамів золота`)
};


// // 3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : 
// // до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок! 
let order = +prompt('Введіть суму замовлення');
let discount1 = (order - 0.01 * order);
let discount5 = (order - 0.05 * order);
let discount10 = (order - 0.1 * order);

if (order <= 500) {
  alert(`З врахуванням знижки в 1% з Вас ${discount1} гривень`);
  } else if (order > 501 && order <= 1000) {
    alert(`З врахуванням знижки в 5% з Вас ${discount5} гривень`);
  } else if (order > 1000) {
    alert(`З врахуванням знижки в 10% з Вас ${discount10} гривень та подарунковий сертифікат на 200 гривень!`);
  };

// // 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, 
// // вірна відповідь - 1 бал, якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал. 
let question1 = +prompt('2+2 = ?');
let answer1 = 4;
if (question1 === answer1) {
  alert('Вірно! Маєш 1 бал');
} else {
  alert('Ніт! Іди броди!');
};

let question2 = +prompt('2+3 = ?');
let answer2 = 5;
if (question2 === answer2) {
  alert('Вірно! Маєш 1 бал');
} else {
  alert('Ніт! Іди броди!');
};

let question3 = +prompt('2+4 = ?');
let answer3 = 6;
if (question3 === answer3) {
  alert('Вірно! Маєш 1 бал');
} else {
  alert('Ніт! Іди броди!');
};

let question4 = +prompt('2+5 = ?');
let answer4 = 7;
if (question4 === answer4) {
  alert('Вірно! Маєш 1 бал');
} else {
  alert('Ніт! Іди броди!');
};

let question5 = +prompt('2+6 = ?');
let answer5 = 8;
if (question5 === answer5) {
  alert('Вірно! Маєш 1 бал');
} else {
  alert('Ніт! Іди броди!');
};

if (question1 === answer1 && question2 === answer2 && question3 === answer3 && question4 === answer4 && question5 === answer5) {
  alert('Файно є! Маєш ще 1 додатковий бал')
} else {
  alert('Іди ще раз до школи, банєку!')
};

// 5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 
let number = prompt('Введи тризначне число');
let numberArr = number.split('');
let num1 = numberArr [0];
let num2 = numberArr [1];
let num3 = numberArr [2];

if (num1 == num2 || num1 == num3 || num2 == num3) {
  alert(`У числі ${number} є однакові цифри`);
} else {
  alert(`У числі ${number} нема однакових цифр`);
};

// 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.
let button = prompt('Вибери кнопку на клаві від 1 до =');

if (button == '1') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш !`);
} else if (button == '2') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш @`);
} else if (button == '3') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш #`);
} else if (button == '4') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш $`);
} else if (button == '5') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш %`);
} else if (button == '6') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш ^`);
} else if (button == '7') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш &`);
} else if (button == '8') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш *`);
} else if (button == '9') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш (`);
} else if (button == '0') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш )`);
} else if (button == '-') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш _`);
} else if (button == '=') {
  alert(`Якщо натиснути ${button} разом із Shift, отримаєш +`);
};
