// Файл для экспорта, работает через задницу ...
var car = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    vonertible: false,
    mileage: 1021
};
var cadi = {
    make: "Cadillac",
    model: "GM Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    vonertible: false,
    mileage: 12892
};
var fiat = {
    make: "Fiat",
    model: "Fiat-500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};
var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};
var listTo = [car, cadi, fiat, taxi];
exports.list = listTo;

var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
var models = ["Cadillac", "Fiat-Fly", "Bel-Air", "LandCruiser", "Torpedo"];
var years = [2008, 2010, 2012, 2014, 2015];
var colors = ["red", "blue", "tan", "yellow", "white"];
var convertible = [true, false];

var rand1 = Math.floor(Math.random() * makes.length);
var rand2 = Math.floor(Math.random() * models.length);
var rand3 = Math.floor(Math.random() * years.length);
var rand4 = Math.floor(Math.random() * colors.length);
var rand5 = Math.floor(Math.random() * 5) + 1;
var rand6 = Math.floor(Math.random() * 2);

function makeCar(car){
    car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0,
        started: false,
        fuel: 0,
        start: function() {
            this.started = true;
        },
        stop: function() {
            this.started = false;
            console.log('Глуши мотор!');
        },
        drive: function() {
            if (this.started) {
                if (this.fuel > 0) {
                    console.log("Гым гым .. завелась, можно ехать!");
                    this.fuel = this.fuel -1;
                    console.log("Потратили "+this.fuel+" единиц топлива.");
                } else {
                    console.log("Ooops... бенизна нет, ексиль моксиль.");
                }
            } else {
                console.log("Уважаемый .. вы бы завели её для начала!(смешки из зала...)");
            };
        },
        addFuel: function(amount) {
            this.fuel = this.fuel + amount;
            console.log("Залили топлива на "+amount+" литра(ов)");
        }
    };
    return car;
}
exports.makeCar = makeCar();


