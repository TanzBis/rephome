'use strict'

let title = prompt("Как называется ваш проект?");
console.log(String(title));
console.log(typeof title);
let screens = prompt("Какие типы экранов нужно разработать?");
console.log(String(screens));
const forScreens = screens.split(", ");
console.log(forScreens);
let screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(Number(screenPrice));
let adaptive = confirm("Нужен ли адаптив?");
console.log((adaptive));
let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = +prompt("Cколько это будет стоить?");
console.log(servicePrice1);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = +prompt("Cколько это будет стоить?");
console.log(servicePrice2);
let rollback = 70;
let fullPrice = (screenPrice + servicePrice1 + servicePrice2)*((rollback/100));
console.log(Math.ceil(fullPrice));
console.log("Стоимость разработки сайта:", fullPrice, "рублей");
if (fullPrice > 30000) 
{
  alert("Даем скидку в 10%");
} else if (15000 < fullPrice && fullPrice < 30000) {
  alert("Даем скидку в 5%");
} else if (15000 < fullPrice &&  fullPrice > 0 ) {
  alert("Скидка не предусмотрена");
} else if(fullPrice > 0) {
  alert("что-то пошло не так");
} else if(fullPrice == 30000) {
  alert("Обойдется в 30000");
} else if(fullPrice == 15000) {
  alert("Обойдется");
} else if(fullPrice == 0) {
  alert("жаль, что мы не работаем бесплатно");
} else {
  alert(fullPrice);
}
console.log("Any text");

alert("message") // внутри редактора кода работать не будет





