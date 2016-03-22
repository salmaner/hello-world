var listZu = require('./car_obj').list; // .list передали список, имя списка берется из car_obj

function getcar(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}
for (var i = 0; i <= listZu.length - 4; i++) {
    var cr = getcar(listZu[i]);
    if (cr) {
        console.log("Машина " + listZu[i].model + " подходит по условию!");
    } else {
        console.log("Машина " + listZu[i].model + " НЕ подходит по условию!");
    }
}
console.log("        * * * * Ну что же тогда купим новую машину! * * * * * ");

// * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

function displayCar(car) {
    console.log("Ваша новая машина " + car.model + " сделана " + car.make +
        ", " + car.year + " года выпуска.");
}
var newcar = require('./car_obj').makeCar;
displayCar(newcar);

//console.log("Все характеристики вашего нового автомобиля:");
//for(var prop in newcar) {  // новый вид цикла for ... in для перебора свойств объектов
//    console.log(prop+" : "+newcar[prop]);
//}

var edutxt;
if (newcar.started === false) {
    edutxt = 'стоп! почему мы не едим?';
}
console.log("Я сел в свой новый " + newcar.model + " и нажал педаль газа, и ..." + edutxt);
console.log("Помощь из зала очень тихо ...(Показание топлива: " + newcar.fuel + ")");
newcar.drive();
newcar.start();
newcar.drive();
newcar.addFuel(2);
newcar.drive();
newcar.drive();
newcar.drive();
newcar.stop();

