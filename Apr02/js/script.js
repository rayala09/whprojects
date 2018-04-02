// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('.p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color = 'blue';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);
// pByClassname[0].style.fontSize = '40px';

// var pByTagname = document.getElementsByTagName('p');
// console.log(pByTagname);
// // pByTagname[9].style.color = 'yellow';
// console.log(pByTagname.length);

// //FOR LOOP
// // |-------| arguments
// for(var i = 0; i<10; i++){
//     pByTagname[i].style.color = 'red';
//     console.log(i);
// }

// var name = 'Ray';
// console.log(name.length);

// for(var i=0; i<name.length; i++){
//     console.log(i);
//     console.log(name[i]);
// }

// function userlog() {

   
//  getUser(); 
// }

// function getUser() {
//     var name = prompt("What is your name?");
    
//     for(var i=0; i<name.length; i++){
//         console.log(name[i]);
//         // alert(name);
//     }
//     // var innerName = document.getElementById('last');
//     // innerName.innerHTML = name;
    
// }
// userlog();


//Get users two numbers
// function getUserNums(){
//      var num1 = prompt("please enter a number");
//      var num2 = prompt("please enter another number");

//      addUserNums(num1, num2);

// }

// //alert added numbers
// function addUserNums(x, y){
//          console.log(arguments);
//     //   alert( parseInt(x) + parseInt(y) );

 
// }

// getUserNums();

/*
  -write a function that asks the user for three colors
  -Write another function loops through "arguments" array
  -each paragraph to be each color
*/

// ['p', 'p', 'p']
// ['red' 'green', 'blue']
// p1.color = red
// p2.color = green 
// p3.color = blue 


function getColor(){
    //ONE PROMPT ONLY
    var userColors = prompt('pick some colors (comma seperated)');
    var userTrimmedColors = [];
    for(var i=0; i<userColors.length;i++){
        userTrimmedColors.push(userColors[i].trim())
    }
    console.log(userColors.split(","));

    //MULTIPLE PROMPTS
    // var color1 = prompt('Enter first color');
    // var color2 = prompt('Enter second color');
    // var color3 = prompt('Enter last color');

    // colorizeP(color1, color2, color3);

}
function colorizeP(x, y, z){
    var paragraphs = document.getElementsByClassName('p');
    console.log(paragraphs);
    for(var i=0; i<arguments.length; i++){
        paragraphs[i].style.color = arguments [i];
    }
    // paragraphs[0].style.color = x;
    // paragraphs[1].style.color = y;
    // paragraphs[2].style.color = z;
}
getColor();


