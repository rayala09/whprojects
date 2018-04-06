// MATH OBJECT

//INTEGERS - WHOLE NUMBERS

//FLOATS - DECIMALS

var wha = .1 * .2;
//0.02000004
var rounded = Math.round(0.0000000001);
//.49 && below rounds down
//.5 && up rounds up

//MATH.CEIL
var roundedUp = Math.ceil(0.000000001);

// MATH.FLOOR
var roundedDown = Math.floor(0.999999999);

// MATH.PI
var pi = Math.PI;
//MATH.POW
// console.log(Math.pow(8,2));

//MATH.SQRT
// console.log(Math.sqrt(64));
//RANDOM NUMBER
/*
console.log(Math.random());

console.log('.round:'+rounded, '.ceil:'+ roundedUp, '.floor:'+ roundedDown, '.PI:'+pi);
*/

/**
 * RANDOM NUMBER GENERATOR
 */
/*
 var rand = Math.random();
 rand = Math.floor(rand*11);
 console.log(rand);

 function pickANum(){
    var userNum = prompt('guess a number between 0 and 10');
    checkNum(userNum);
}

 function pickAnotherNum(){
    var userNum = prompt('guess again');
    checkNum(userNum);
}
 pickANum();
 function checkNum(num){
     if(num < rand){
         alert(num + 'is too low, pick again');
         pickAnotherNum();
        }
    else if(num > rand){
        alert(num + 'is too high, pick again');
        pickAnotherNum();
    }
    else {
        alert(num + 'is the right number!! You win!');
    }

 }

 */

 var userPick = document.getElementById('userPick');
 var submitBtn = document.querySelector('#submit');
 var resetBtn = document.querySelector('#reset');
 var userPickRes = document.querySelector('h1');
//  var ranNum = document.querySelector('button');

 submitBtn.addEventListener('click', getUserPick);
 resetBtn.addEventListener('click', generateNum);

 //GLOBAL VARIABLE
 var rand;
 var attempts;
 
 function getUserPick(){
    
    attempts -= 1; 
    var userNum = parseInt(userPick.value);  //SCOPE-ONLY EXISTS INSIDE THE FUNCTION
    userPick.value = '';
    checkUserPick(userNum);

}
function checkUserPick(x){
    if(attempts>0){

        if( x < rand){
            printUserRes(x +  ' is too low, pick again');
            // pickAnotherNum();
        }
        else if(x > rand){
            printUserRes(x +  ' is too high, pick again');
            //    pickAnotherNum();
        }
        else if(x==rand) {
            printUserRes(x +  ' is the right number!! You win!');
        }    
        else {
            printUserRes('please input a number');
        }    
    }
    else {
        
        printUserRes('Game Over');
    }
    // console.log(x);
}

function printUserRes(userRes){
    userPickRes.innerHTML = userRes;
    
    
}

function generateNum(){
    attempts=3;
    userPickRes.innerHTML = '';
    userPick.value = '';
    rand = Math.random();
    rand = Math.floor(rand*11);
    console.log(rand);
} 
generateNum();

/**
 * add another button that will RUN A FUNTCTION TO RESET THE RANDOM NUMBER
 * 
 */

//  ON LOAD, PICK A NEW RANDOM NUMBER
// AFTER NUMBER HAS BEEN PICKED
// RUN A FUNCTION THAT SETS THE BACKGROUND-COLOR
// TIP: HSL(X, 50%,50%)

var randColor;
function getRandColor(){
    randColor = Math.random();
    randColor = Math.floor(randColor * 360);
    document.body.style.backgroundColor = 'hsl(' + randColor + ',50%,50%)';
    console.log(randColor);
}
getRandColor();

console.log(window.innerWidth, window.innerHeight);
window.addEventListener('mousemove', function(e){
    var width = Math.round((e.x / window.innerWidth)*100);
    var height = Math.round((e.y / window.innerHeight)*100);
    document.body.style.backgroundColor = `hsl(${randColor}, ${width}%, ${height}%)`;
    
    // console.log((e.x/window.innerWidth)*100, (e.y/window.innerHeight)*100;
});