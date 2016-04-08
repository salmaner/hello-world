// Created by rykov on 30.08.2015.
var access = document.getElementById('greenplanet');
var code = access.outerHTML;
var planet = document.getElementById("greenplanet");
console.log("Полное содержание тега" + access.outerHTML);

var sometxt = "<p>примерчик из книги для особо Одаренных. где надо было вводить<br>"+
"номер телефона, менять цвет используя стили.<br>"+
"добавил поле инпут и вывожу как тескт. столкнулся с проблемой<br>"+
"с регулярнымы выражениями. по книге они принимали цифвры с дефисом<br>"+
"и матчили их. через поле ипут они этого не делают.<br><p>"


function validate() {
    var phoneNumber = document.getElementById("inner").value; 
    return phoneNumber;
    // нахуй эти регулярные выражения, то работают, то нет.
    // return phoneNumber.match(/^\d{3}-?\d{4}$/); // регулярные выражения ...
}


function Bstart() {
    console.log(planet);
    planet.innerHTML = "Red Alert: поменяли цвет и выражениеы!";
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


function init() {
    document.getElementById("bstart").onclick = Bstart;
    document.getElementById("bclear").onclick = Bclear;
    document.getElementById("bwhotxt").onclick = Bshotxt;


    
    
}

window.onload = init;

// ===================================== был какой то примерчик
// function Duck(sound) {
//     this.sound = sound;
//     this.quack = function() { console.log(this.sound); }
// }
// var toy = new Duck("gav gav gav");
// toy.quack();
// console.log(typeof toy);
// console.log(toy instanceof Duck);
