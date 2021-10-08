'use strict'
let title = prompt("Как называется ваш проект?");
console.log((title));
console.log(typeof title);
let screens = prompt("Какие типы экранов нужно разработать?").toLowerCase();
const forScreens = screens.split(", ");
console.log(forScreens);
let screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log((screenPrice));
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
let rollback = 20;
let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let servicePercentprice = Math.ceil(fullPrice - (fullPrice * rollback/100));
console.log((servicePercentprice));
if (fullPrice > 30000)
{
  console.log("Даем скидку в 10%");
} else if (fullPrice <= 30000 && fullPrice > 15000) {
    console.log("Даем скидку в 5%");
} else if (15000 <= fullPrice &&  fullPrice > 0 ) {
    console.log("Скидка не предусмотрена");
} else if(fullPrice < 0) {
    console.log("что-то пошло не так");
}

console.log("Any text");
alert("message") // внутри редактора кода работать не будет





