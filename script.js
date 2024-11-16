// Отримуємо випадкове число від 0 до size
let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

// Вираховуємо відстань між подією та цілью 
let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// Отримуємо рядок, що показує відстань
let getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Окріп!";
    } else if (distance < 20) {
        return "Дуже гаряче";
    } else if (distance < 40) {
        return "Гаряче";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Дуже холодно";
    } else {
        return "Мороз!";
    }
};

// Налаштовуємо наші змінні параметри
let width = 800;
let height = 800;
let clicks = 0;

// Створюємо випадкову локацію target
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

// Додаємо маніпулятор кліків до елементу #map
$("#map").click(function (event) {
    clicks++;

    // Отримуємо відстань між event і target
    let distance = getDistance(event, target);

    // Конвертуємо відстань у підказку
    let distanceHint = getDistanceHint(distance);

    // Оновлюємо #distance-елемент новою підказкою
    $("#distance").text(distanceHint);

    // Якщо клік було зроблено достатньо близько, кажемо гравцеві, що він переміг
    if (distance < 8) {
        alert("Знайшли скарб в " + clicks + " кліків!");
    }
});
