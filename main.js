// Примеры взяты с видео https://youtu.be/maPRR_jjyOE 


console.log("hello");

let userName = "Марк";
//  Function Declaration МОжно запустить ДО объясления фнункции
function sayHi() {
  alert("Hello");
}

// sayHi();
// Function Expression Нельзя использовать до обявления(строгий режим)
let sayHi2 = function () {
  alert("Hello");
};

// !-------------!

function sayHi3(userName) {
  // userName - параметр функции
  console.log(`Hello ${userName} `); // userName - аргумент функции
}

sayHi3("Viktor");

// Функции как аргумменты в других функциях
// Коллбек - функция , которая вызывает функцию
function summ(a, b) {
  return a + b;
}

function doSome(func, x) {
  // Можно использовать ещё аргументы
  let y = 20;
  let result = func(x, y);
  console.log(result);
}

doSome(summ, 10);

// IIFE - самовызывающаяся функция

// () - выражение, ()() - вызывает выражение

(function () {
  console.log(
    `Анонимная, самовызывающаяся функция со своей областью видимости`
  );
  console.log(this.name)
})();


(function summ(a, b) {
  console.log(a + b);
  return a + b;
})(10, 8);

//  Стрелочные Функции - Ссылается на контекст в области которой была объяслена

// let sayHi4 = (name) => {
//     console.log(`Hi ${name} !`)
// }

let sayHi4 = (name) => console.log(`Hi ${name} !`);

// (function (name,func) {
//     name = "Viktor"; //Не Сработает
//     sayHi4();
// })();

sayHi4("Yuri"); // Сработает

// Массивы ...

const array = [1, 2, 4, 5];
array.splice(2, 1); // Сработает, потому что константа ссылается только на мемьл массива

for (let item of array) {
  //For of
  console.log(item);
}

array.forEach(function (item, index) {
  console.log(`${item} => ${index}`);
});

array.forEach(printArray); // Не нужно вызывть вторую функцию скобочками ();

function printArray(item, index) {
  console.log(`${item} => ${index}`);
}
// Стрелочная функция forEach
array.forEach((item, index) => console.log(`${item} => ${index}`));

// Объекты ...

const person = {
  userName: "Mark",
  age: 25,
  property: true,
};
//  Обращения к переменным
person.age;

person["age"];
// The Same
let propertyName = "age";
console.log(person[propertyName]);

delete person.property;

// THIS ссылается на объект

person.sayHi = function (name) {
  console.log(` Hi, ${name}! My name is ${this.userName}`);
};
person.sayHi("Viktor");

// Классы , Конструкторы объектов

class Person {
  constructor(userName, age, isMarried) {
    this.userName = userName;
    this.age = age;
    this.isMarried = isMarried;
  }

  sayHi(name) {
    console.log(`Hello ${name}! I'm ${this.userName}`);
  }
}

const person1 = new Person("Name", 20, true);
const person2 = new Person("Mary", 21, true);

person1.sayHi(`Viktor`);

// DOM Elements ВЫбор элементов
// document.querySelector(); - Возвращает ПЕРВЫЙ найденный Элемент
document.querySelector("h1 p"); // Tag
document.querySelector(".nav .header"); // Class
document.querySelector("#footer"); // ID
document.querySelector(".header .nav .link a"); // a > link > nav > header

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByName();
// document.getElementsByTagName();
// document.getElementsByTagNameNS();

// Методы ДОМ Элементов

const header = document.querySelector("h2");
header.classList.add("red");
// qs - document.querySelector('selector')

// ВЫБОР КОЛЛЕКЦИИ ЭЛЕМЕНТОВ

const headings = document.querySelectorAll("h2");

for (let item of headings) {
  console.log(item);
  item.classList.add("red-text");
}

headings.forEach((item) => {
  item.classList.add("robot-font");
});

// Работа с CSS классами
/* Element.classList
.add()
.remove()
.toggle()
.contains() */

////////////// Атрибуты DOM 

const img = document.querySelector('#logo');
const srcValue = img.getAttribute('src');
/* img.setAttribute(name, value);
img.hasAttribute(attrName);
img.removeAttribute(attrName) */

img.setAttribute('width', 200)
// К некоторым атрибутам можно обращяться напрямую
img.src = './img/q.png'; // Меняет Путь к Картинке 

const button = document.querySelector('#button')


// Работа с прослушкой события. События

button.value = 'Удалить';
/* button.addEventListener('click', function() {
  console.log('Click!');
  img.remove();
}) */

button.onclick = function () {
  console.log('Click!');
  img.remove();
}

// onclick - Перезаписывает обработчик
// EventListener - позволяет написать несколько обработчиков на одно событие

// ФОРМА
const inputText = document.querySelector('#input-text')
const textBlock = document.querySelector('#text-block')

inputText.addEventListener('input', function(){
  console.log(inputText.value)
  textBlock.innerText = inputText.value; // Функции можно менять (Исользовать стрелочные , или Fucntion Declaration, в последнем случае не надо оставлять () при вызове функции)
})

// Объект Event

const list = document.querySelector('#list');

/* list.addEventListener('click', function () {
  console.log(this);
}); */

list.addEventListener('click', function (event) { // первый параметр всегда будет Эвентом, как бы вы его не назвали (e)
  console.log(this); // Ссылается на основной элемент 
  console.log(event); // Показывает инвормацию при событии
  console.log(event.target); // Выводит цель события (в данном случае - на что нажали)
})

//--- Работа с Элементами . Создание элементов ---
// Создать Элемент
//document.createElement('tag-name')
// element.insertAdjacentElement()
/* 
  Изменить HTML содержимое внутри элемента 
  element.innerHTML = '';

  Изменить текстовое содержимое внутри элемента - node.innerText = '';

  Клонирование элемента - node.cloneNode() // true с внутренним содержимым (текст и текм) false - буз внутреннего содержимого

  Вставить элемент внутрь другого элемента = element.append(nodesOrDOMString)

  Удалить элемент - element.remove()
*/

// Выбор контейнера 
const container = document.querySelector('#elementContainer')
// Создание заголовков 
const newHeader = document.createElement('h1')
newHeader.innerText = 'New title';
container.append(newHeader);

// Клонирование шапки 

const mainHeader = document.querySelector('header')
const headerCopy = mainHeader.cloneNode(); // По дефолту false
container.append(headerCopy);

// Вставка разметки через строки 
const htmlExample = '<h2> Ещё один заголовок </h2>';
container.insertAdjacentHTML('beforeend', htmlExample);

// Вставка разметки через шаблонные строки
const title = 'Text title'
const htmlExample2 = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample2);

// ------ ToDo список задач -------
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
todoForm.addEventListener('submit', formHandler) // НЕ ВЫЗЫВАЕМ ФУНКЦИЮ ()!
function formHandler(event) { // event нужен чтобы обратиться
  event.preventDefault(); // чтобы страница не перезагружалась при submit
  const taskText = todoInput.value;
/*   // Создаем li через разметку
  const li = `<li>${taskText}</li>`
  // Добавляем разметку на страницу 
  todoList.insertAdjacentHTML('beforeend', li ) */


  // Создаем li с помощью элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;
  // Добавляем разметку на страницу
  todoList.append(newTask)
  // Создаем кнопку Удалить 
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button' ); // Роль кнопка - добавлена , потому что кнопка не отправляет орму а носит дополнительный характер
  deleteBtn.innerText = 'Удалить';
  deleteBtn.style['margin-left'] = '15px'; // отступ от текста
  newTask.append(deleteBtn);

  // Добавляем событие по клику 
  deleteBtn.addEventListener('click', deleteTask); // Функция ниже ИЛИ можно обратиться через стрелочную функцию к e.target.closest('li').remove();

  // Очищаем поле ввода 
  todoInput.value = '';
  // Перенести фокус на поле ввода
  todoInput.focus();
}

function deleteTask () {
  this.closest('li').remove(); // Обращеник к родителю элемента (кнопки)
}
 

//--- Работа с setInterval

// let timerId = setTimeout(func, [delay], [arg1], [arg2], ...)

/* const timerID1 = setInterval(function () {
  console.log('Set TImeout')
}, 2000)

setTimeout(function() {
  clearInterval(timerID1)
} , 10000) */

// Секундомер 

const counterElement = document.querySelector('#counter')


const btnStart = document.querySelector('#start')
const btnPause = document.querySelector('#pause')
const btnReset = document.querySelector('#reset')

let counter = 0;
// СТарт
let timerID;
btnStart.onclick = function () {
  timerID = setInterval(function () {
    counter ++;
    console.log('counter');
    counterElement.innerText = counter;
  }, 1000);
}

// Пауза
btnPause.onclick = function () {
  console.log('Таймер остановился')
  clearInterval(timerID)
}

// Сброс
btnReset.onclick = function () {
  counter = 0;
  counterElement.innerText = counter;
}

// ----- Callback. Коллбек Hell
// Чтобы выполнить код, который занимает разное время в правильном порядке
/* setTimeout(() => {
  console.log('Step 1');
  setTimeout(() => {
    console.log('Step 2');
    setTimeout(() => {
      console.log('Step 3');
    }, 1000);
  }, 1500);
}, 2000); */

function checkRoomsTest(){ // Допустим делает запрос в БД или через API
  setTimeout(() => { // setTimeout возвращает timerID , и НЕ ВЕРНЕТ return 
    console.log('ПРоверяем номера в отеле...')
    const availableRooms = true;
    // return availableRooms
    if (availableRooms) {
      console.log('Номера есть!')
    }else {
      console.log('Номеров нет!')
    }
  }, 1000);
}

function checkRoomsTest2(succsess, failed){
  setTimeout(() => {
    console.log('ПРоверяем номера в отеле...')
    const availableRooms = true;
    if (availableRooms) {
      let massage = 'Номера есть';
      succsess(massage);
    }else {
      let message = 'Номеров нет';
      failed(message);
    }
  }, 1000);
}

function checkTickets(){
  setTimeout(function () {
    console.log('--- Function checkTickets ---')
  }, 500);
}
// Callback hell разрастается  
/* checkRoomsTest2(
  function(messageFromcheckRoomsTest2) {
    checkTickets(
      messageFromcheckRoomsTest2,
      function(messageFromCheckTickets){
        submitVacation(messageFromCheckTickets)
      },
      function(messageFromCheckTickets) {
        cancelVacation(messageFromCheckTickets)
      })
  },
  function(messageFromcheckRoomsTest2){
    cancelVacation(messageFromcheckRoomsTest2)
  }
); */
// Можно сократить до ... но всё равно ад расъзрастается
/* checkRoomsTest2(
  function(messageFromcheckRoomsTest2) {
    checkTickets(
      messageFromcheckRoomsTest2,
        submitVacation,
        cancelVacation)
  },
  cancelVacation
); */



function cancelVacation(message) {
  console.log('------------Vacaiton Failed-------')
  console.log(`${message}`)
  console.log('------------Vacaiton Failed-------')
}

function submitVacation(message) {
  console.log('------------Vacaiton Submit-------')
  console.log(`${message}`)
}

// --------- Promise . лучше использовать промисы

const myPromise = new Promise(function(resolve,reject){
  console.log('Promise Created')
  setTimeout(function () {
    // запрос на сервер
    const response = true;
    if (response) {
      let message = "SUCCESS"
      resolve (message); // Работает если response = true
    } else {
      let message = "Failed"
      reject(message); // Работает если response = false
    }
  }, 1000);
});
/* 
myPromise.then(function(data){ // Data в Then это message в resolve (message)
  console.log('Then');
  console.log(data);
  return 'Data from then 1'
}).then(function(data){
  console.log('then 2');
  console.log(data);
}).catch(function(data) { // Data в Catch это message в reject (message)
  console.log('Catch');
  console.log(data);
})
 */

// --------- Несколько Then - не определяют порядок действий. 

/* myPromise.then(function(data){ // Data в Then это message в resolve (message)
  setTimeout(() => {
    console.log('Then 1'); // Выполнится после Then 2
  }, 1000);
}).then(function(data){
  setTimeout(() => {
    console.log('Then 2'); // Выполнится вначале then 2 
  }, 500);
}).catch(function(data) {
  console.log('Catch');
  console.log(data);
}) */

// Чтобы каждый then выполнялся по очереди, мы должны в then передавать Promise

myPromise.then(function(data){ // Data в Then это message в resolve (message)
  return new Promise (function(res,rej){ // Новый Промис
    setTimeout(() => {
      console.log('Then 1'); 
      console.log(data);
      let response = false;
      if (response){
        res('Data from then 1 in then 2'); // чтобы выполнить следующий then нужен вызов resolve() 
      } else {
        rej('Data from then 1 in next catch') // Вызовет не then , а следующий catch
      }
    }, 1000);
  })
}).then(function(data){
  setTimeout(() => {
    console.log('Then 2');
    console.log(data);
  }, 500);
}).catch(function(data) {  // Data в Catch это message в reject (message)
  console.log('Catch');
  console.log(data);
})

// Правильная последовательность всех then друг за другом

// ==== Цепочка промисов. Нескольео промисов с setTimeout =======

function checkRoomsTest3 () {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('Проверяем номера в отеле...');
      const availableRooms = true; // если false - дальше запустится catch 
      if (availableRooms) {
        resolve('Номера есть!');
      } else {
        reject('Номеров нет.');
      }
    }, 1500);
  });
}

// Больше нас первый промис не инетересует

checkRoomsTest3().then(checkTicketsExamplePromise)
  .then(success)
  .catch(failed); // если checkRoomsTest3 функция - то её нужно вызвать, если константа - то она вызывается при присваивание константе

  // Получилась очень аккуратная запись

function checkTicketsExamplePromise(data){
  return new Promise(function(res,rej) {
    setTimeout(() => {
      console.log('then 1');
      console.log('Data from previous step: ', data);
      console.log('ПРоверяем авиабилеты...');
      const availableRooms = true; // если false - дальше запустится catch 

      if (availableRooms) {
        let message = 'Билеты есть'
        res(message);
      } else {
        let message = 'Билетов нет'
        rej(message);
      }
    }, 1000);
  })
}; // принимает данные  data от прошлой функции
 
function success(data) {
  console.log('next then');
  console.log('Data from previous step: ', data);
  console.log('Отпуск одобрен');
}

function failed(data) {
  console.log('next catch');
  console.log('Data from previous step: ', data);
  console.log('Отпуск отменяется');
}


// Асинхронные функции . Они позволяют удобнее работать с промисами

function promiseFunction() {
  return new Promise(function (resolve,reject) {
    setTimeout(() => {
      const result = true;
      if (result) {
        resolve('DONE!');
      } else {
        reject('FAIL!')
      }
    }, 5000);
  });
}

async function startPromise() {
  try { 
    const result = await promiseFunction(); // Вернет значение из resolve или reject
    console.log("===async==="); 
    console.log(result); 
  } catch (err) { // Обработка reject
    console.log(err); // Выведет 'FAIL!' из reject
  }
 
}

startPromise(); // Выведет значение из resolve или reject

/* 
checkRoomsTest3().then(checkTicketsExamplePromise)
  .then(success)
  .catch(failed);
  Равна конструкции ниже 
  
  async function checkVacation() {
  try {
    const roomResult = await checkRoomsTest3();
    const ticketsResult = await checkTicketsExamplePromise(roomResult);
    submitVacation(ticketsResult);
  } catch (err) {
    cancelVacation(err);
  }
}

checkVacation();
*/

// === Пример fetch с промисами получение данных от API
// https://www.cbr-xml-daily.ru/

// 1. Получить данные с сервера

// fetch('https://www.cbr-xml-daily.ru/daily_json.js') // Возвращает промис, можно тут же спользовать .then()
// .then(function (data) {
//     return data.json() // Возвращает тоже промис, поэтому прокидываем в следующий .then
// }).then(function(data){
//   console.log(data)
// }).catch('Произошла ошибка')

/* async function getCurrenties() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  console.log(data);

  const usdRead = data.Valute.USD.Value.toFixed(3);// записываем значение доллара в переменную И ограничиваем его значение до 3 знаков после запятой
  const eurRead = data.Valute.EUR.Value.toFixed(3);
// 2. Отобразить всё на странице

  const usdElement = document.querySelector('#usd')
  const eurElement = document.querySelector('#eur')

  usdElement.innerText = usdRead;
  eurElement.innerText = eurRead;
} */ // Проблема в том чтобы вернуть полученные данные из асинхронной функции, потому что она возвращает промис

// 1. Получить данные 
async function getCurrenties() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  console.log(data);
  // 2. Отобразить данные 
  renderRates(data);
}

getCurrenties();
// 2. Отображение данных
function renderRates(data) { // функция описана снаружи, но она будет продолжать работу в асинхронной функции
  const usdRead = data.Valute.USD.Value.toFixed(3);// записываем значение доллара в переменную И ограничиваем его значение до 3 знаков после запятой
  const eurRead = data.Valute.EUR.Value.toFixed(3);
// 2. Отобразить всё на странице

  const usdElement = document.querySelector('#usd')
  const eurElement = document.querySelector('#eur')

  usdElement.innerText = usdRead;
  eurElement.innerText = eurRead;
}
