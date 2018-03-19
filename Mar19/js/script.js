// document.getElementById('btn2').style.color = "red";

// console.log("Here is my first console message");
// console.info("This is info");
// console.warn("Danger will Robinson");
// console.error("Uh Uh uh. You didn't say the magic word");

//browser Alert Box
// alert('Here is my popup.');

//Browser Confirm Box
// var userResult = confirm("Did you remember to lock your car?");
// console.log(userResult);


//Browser Prompt Box
// var userName = prompt("What is your name?");
// console.log(userName);


/* 
Variables
  Must start with a lowercase!
  Must start with a letter.
  Can contain underscore.
  May use camelCasing.
  */

var username;
var room1;
var user_name;
var userName;
var theUsersFirstNameOnly;

//Math
//PEMDAS matters
var age = 20;
var decade = 10;
var double = 2;
var fourth = 4;
// var newAge = (age + decade)*2;
age += decade;
age *= double;
age /= fourth;

console.log(age);

//concatination
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// alert(firstName + "" + lastName);

/* String Interpolation
   ${Variable}
*/
// alert(`${firstName} ${lastName}`);

// prompt user for
// make of the vehicle
// the year
// the color
// alert the result

// 3 new variables
//formatting: color, year make.
function getUserVehicle(){

    var make = prompt("What is the make of your vehicle?");
    var color = prompt("What is the color of your vehicle?");
    var year = prompt("What year is your vehicle?");

    alert(`${color}, ${year} ${make}.`);
}

function primaryUser() {
   var first = prompt("What is your first name?");
   var last = prompt("What is your last name?");
   var place = prompt("Where were you born?");

   document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place;

}

function secondaryUser() {
   var first = prompt("What is your first name?");
   var last = prompt("What is your last name");
   var place = prompt("Where were you born?");

   document.getElementById('secondaryUser').innerHTML = first + " " + last + ", born in " + place;

}

function tertiaryUser() {
    var first = prompt("What is your first name");
    var last = prompt("what is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('tertiaryUser').innerHTML = first + " " + last + ", born in " + place;
}
