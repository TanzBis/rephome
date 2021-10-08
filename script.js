'use strict';
//Блок объявления переменных
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?").toLowerCase();
const forScreens = screens.split(", ");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Cколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Cколько это будет стоить?");
let rollback = 20;
let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * rollback/100));
let allServicePrices;

//Блок описания функций
const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};
const getRollbackMessage = function(price) {

    if (price > 30000) {
        return "Даем скидку в 10%";
    } else if (price <= 30000 && price > 15000) {
        return "Даем скидку в 5%";
    } else if (15000 <= price &&  price > 0 ) {
        return "Скидка не предусмотрена";
    } else if(price < 0) {
        return "что-то пошло не так";
    }

};

const getAllServicePrices = function(service1, service2) {
    return service1 + service2;
};
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}

const getTitle = function(title) {
    title = title.trim();
    title = title[0].toUpperCase() + title.toLowerCase();
    return title;  
};

const getServicePercentPrice = function(a, b) {
    return  Math.ceil(a - (a * b/100));
};

// Функциональный блок
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrice(fullPrice, fullPrice, rollback);
showTypeOf(screenPrice);
showTypeOf(adaptive);

//Блок мусора

console.log(forScreens);
console.log(getTitle(title));
console.log(getRollbackMessage(fullPrice));
console.log(getAllServicePrices(service1, service2));

