// place all variables with correct targets here
var nav = document.getElementById('nav');
var Btn1 = document.getElementById('Btn1');
var Btn2 = document.getElementById('Btn2');
var Btn3 = document.getElementById('Btn3');
var heading1 = document.getElementById('h1');
var p1 = document.getElementById('p1');
var anchortag1 = document.getElementById('link1');
var anchortag2 = document.getElementById('link2');
//color list
var bgcolorlist = new Array("red", "blue", "white", "pink", "teal", "salmon", "grey","pruple");



//place all eventlisteners here
Btn1.addEventListener("click", sideNav);
Btn2.addEventListener("click", user);
Btn3.addEventListener("click", style);
anchortag1.addEventListener("mouseover", tag1);
anchortag2.addEventListener("mouseover", tag2);


// place all functions here
function colorChange() {
    document.getElementById('body').style.backgroundColor = bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]
}
function sideNav() {
    nav.classList.toggle('sideNav');
}
function user() {
    var first = prompt("What is your First Name?");
    var last = prompt("What is your Last Name?");

    document.getElementById('h1').innerHTML = "Hello:" + " " + first + " " + last;
}
function style() {
    // heading1.style.fontSize = "64px";
    // heading1.style.color = "yellow";
    h1.classList.toggle('style');
}
// function styleuser() {
//     h1.classList.style.fontSize = "20px";
//     h1.style.color = "red";
// }
function tag1() {
    anchortag1.style.color = "orange";
}
function tag2() {
    anchortag2.style.fontSize = "32px";
}

colorChange();

