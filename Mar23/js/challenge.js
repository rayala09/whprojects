//Declaring Variables

var menu = document.getElementById('menu');
var username = document.getElementById('username');
var userstyle = document.getElementById('userstyle');

var nav = document.getElementById('nav');
var main = document.getElementById('main');
var user = document.getElementById('user');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');

//Event listeners
menu.addEventListener('click', vertMenu);
username.addEventListener('click', getUsername);
userstyle.addEventListener('click', styleUsername);
a1.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e);
    this.style.color = "green";
}); //anonymous function
a2.addEventListener('click', colorText2);


//Functions

function changeBody() {
    document.body.style.backgroundColor = "teal";
}
changeBody();

function vertMenu() {
    nav.classList.toggle('vertical');
    main.classList.toggle('vertical');

}
function getUsername() {
    var username = prompt("What is your name?");
    user.innerHTML = username;
    
}
function styleUsername() {
    user.classList.add('mega');
    
}
// function colorText1(){
//     a1.style.color = "red";
// }
function colorText2(e) {
    e.preventDefault();
    console.log(e);
    a2.style.color = "yellow";
    
}
