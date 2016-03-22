//============================================================================
// Ради примера, мы реализуем эти функции снова, на этот раз с помощью
// функциональных литералов внутри литерала объекта.
var SomeFunc = {
    Add: function (x, y) {
        return x + y;
    },
    Subtr: function (x, y) {
        return x - y;
    },
    Mult: function (x, y) {
        return x * y;
    },
    Dive: function (x, y) {
        return x / y;
    }
};

// это пример задания статистической переменной функции, это позволяет
//не забивать код глобальными переменными, и такие переменные сохраняют
//значения функции между ее вызовами.
OperationTwo.StatValue = 0;
// Эта функция принимает имя оператора, отыскивает оператор в объекте,
// а затем вызывает его для переданных операндов. Обратите внимание
// на синтаксис вызова функции оператора.
function OperationTwo(OperName, param1, param2) {
    OperationTwo.StatValue++;
    var ReturnObject;
    if (typeof SomeFunc[OperName] == "function") {
        ReturnObject = SomeFunc[OperName](param1, param2);
        return ReturnObject;
    } else {
        throw "неизвестный оператор";
    }
}
// Вот так мы можем вызвать эту функцию для вычисления значения
// сначало вызывается OperationTwo("Add" + " my " + "world") и
// возвращается "my world" далее вызывается ("Add" + "hello" + " my world")
// т.е. внтури передаваемых параметров функции выполняются первыми,самые вложенные
var jj;
jj = OperationTwo(
    "Add",
    "hello",
    OperationTwo("Add", " my ", "world")
);
console.log("Количество параметров: " + OperationTwo.length,
    ".\nФункц-ия вызывалась: " + OperationTwo.StatValue + " раз.");
console.log(jj);


function fun(x,y) {
    console.log(this);
    this.be = x;
    this.bu = y;
    this.me = x + y;
}

var ob = {
    be: 0,
    bu: 0,
    me: 0,

};

fun.call(ob, 2, 5);
console.log(ob);


//============================================================================
//var user = {
//    name: 'Василий', // присвоили ключ и значение
//    sayHi: function (text) { // а тут присва-ем целый метод, после скобок что он делает.
//        console.log('Привет! ' + text); }};
//user.sayHi(user.name);

//============================================================================
//// Здесь определяются несколько простых функций
//function Add(x, y) {
//    return x + y;
//}
//function Subtr(x, y) {
//    return x - y;
//}
//function Mult(x, y) {
//    return x * y;
//}
//function Dive(x, y) {
//    return x / y;
//}
//// Эта функция принимает одну из вышеприведенных функций
//// в качестве аргумента и вызывает ее для двух операндов
//function OpetatonOne(operator, param1, param2) {
//    return operator(param1, param2);
//}
//// Вот так можно вызвать эту функцию для вычисления значения выражения (2+3) + (4*5):
//var i = OpetatonOne(Add,
//    OpetatonOne(Add, 2, 3),
//    OpetatonOne(Mult, 4, 5));
//console.log(i);