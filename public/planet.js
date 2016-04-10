// Created by rykov on 30.08.2015.
var access = document.getElementById('greenplanet');
var code = access.outerHTML;
var planet = document.getElementById("greenplanet");
console.log("Полное содержание тега" + access.outerHTML);

var sometxt = "<h3>Blue Planet</h3>"+
"<p id=\"blueplanet\">All systems A-OK</p>"+
"<p>примерчик из книги для особо Одаренных. где надо было вводить<br>"+
"номер телефона, менять цвет используя стили.<br>"+
"добавил поле инпут и вывожу как тескт. столкнулся с проблемой<br>"+
"с регулярнымы выражениями. по книге они принимали цифвры с дефисом<br>"+
"и матчили их. через поле ипут они этого не делают.<br><p>"

// создаем одну запись в для локального хранилища
// один ключ одна запись
var myArray = ["One", "Two", ["One", "Two"], "four"];
var myArray2 = ["кружка","бочка",[100,200,900,800],"ложка"];
localStorage["myArray1"] = JSON.stringify(myArray);
localStorage["myArray2"] = JSON.stringify(myArray2);
console.log(localStorage["myArray"]);

// - - - - declare all funcitons which we need - - - - -
function validate() {
    var phoneNumber = document.getElementById("inner").value; 
    return phoneNumber;
    // наkуй эти регулярные выражения, то работают, то нет.
    // return phoneNumber.match(/^\d{3}-?\d{4}$/); // регулярные выражения ...
}


function Bstart() {
    console.log(planet);
    planet.innerHTML = "Red Alert: поменяли цвет и Тип с его значением!";
    planet.setAttribute("class", "redtext");
    
    x = validate();
    var tipo = document.getElementById("PoutTxt");
    tipo.innerHTML = x;
}
function Bclear() {
    var txtout = document.getElementById("PoutTxt");
    txtout.innerHTML = '';
}

function Bshotxt () {
    var tipo = document.getElementById("PoutTxt");
    tipo.innerHTML = sometxt;
}

function Bshwoloc () {
    console.log("записанно в хранилища: "+localStorage.length);
    for (var i = 0; i < localStorage.length; i++) {
       key = localStorage.key(i);
       data = JSON.parse(localStorage[key]);
       console.log(data);
    }
}

function init() {
    document.getElementById("bstart").onclick = Bstart;
    document.getElementById("bclear").onclick = Bclear;
    document.getElementById("bwhotxt").onclick = Bshotxt;
    document.getElementById("bsholoc").onclick = Bshwoloc;
}

window.onload = init;
