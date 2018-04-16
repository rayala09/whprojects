//PROMPT USER FOR NAME
/*
function getUserName(){
    var username = prompt("What is your first and last name?").split(" ");
    // var splitUsername = username.split(" ");
    console.log(username);
    
    outputUsername(username);
}
//PRINTING USERNAME
function outputUsername(nameArray){
    // console.log(nameArray);
    // document.getElementById('firstname').innerHTML = nameArray[0];
    // document.getElementById('lastname').innerHTML = nameArray[nameArray.length - 1];

    // FOR LOOP
    for(var i = 0; i<nameArray.length; i++){
        if( i == 0 || i == nameArray.length - 1){
            document.getElementById('firstname').innerHTML += nameArray[i] + " ";

        }
    }
}



getUserName();
*/



/*

// ARRAYS   
var stuff = ['Subaru', 'Ford', 'Dodge'];
console.log(stuff[1]);
console.log(stuff.length);

//ADDS NEW ELEMENT TO ARRAY BY PUSH METHOD
stuff.push("Bmw");
console.log(stuff);

//REMOVES LAST ELEMENT FROM ARRAY
stuff.pop();
console.log(stuff);

var removedCar = stuff.pop();
console.log(stuff);
console.log(removedCar);


//ADDS ELEMENT TO FRONT OF THE ARRAY
stuff.unshift("Chevy", "LandRover");
console.log(stuff);

//REMOVES ELEMENT FROM THE FRONT OF ARRAY
stuff.shift();
console.log(stuff);

//ADDS ELEMENT TO ARRAY IN A SPECIFIC LOCATION
stuff.splice(1, 1, "Red", "Green");
console.log(stuff);


stuff.splice(1, 1, "Apple", "Banana", "Kiwi", "Grape", "Mango");
console.log(stuff);

stuff.splice(2,1);
console.log(stuff);


//SLICE METHOD-
stuff.slice(2,1);
var removed = stuff.slice(4);
console.log(removed);


//CHALLENEGE

/*
    -CREATE AN ARRAY OF FIVE MOVIES
    -AT THE BEGINNING OF THE ARRAY, ADD "DIE HARD"
    -REMOVE THE 3RD AND 4TH MOVIES, AND IN THEIR PLACE, PUT "GODFATHER I", "GODFATHER II", "GODFATHER II"
    -ADD "GUARDIANS OF THE GALAXY" TO THE END
    -DUPLICATE INDEX 1 - 3 INTO A NEW ARRAY
    -REMOVE THE FIRST MOVIE
    -CONSOLE THE SECOND TO LAST MOVIE 
    
    -BONUS DELETE EVERYTHING AND ADD JURASSIC PARK    
*/


/*

var movies = ["The Skulls", "Good Will Hunting", "Freedom Writers", "The pursuit of Happiness", "Snowden"];

console.log(movies);

movies.unshift("Die Hard");
console.log(movies);

movies.splice(2, 2, "GodFather I", "GodFather II", "GodFather III");
console.log(movies);

movies.push("Guardians of the Galaxy");
console.log(movies);

var newArray = movies.slice(0, 3);
console.log(newArray);

newArray.shift();
console.log(newArray);

console.log(movies[movies.length-2]);

movies.splice(0, 8, "Jurassic Park")
console.log(movies);

*/

/*

//IF ELSE IF() ELSE

function getUserAge(){
    var userAge = parseInt(prompt("How old are you?"));
    
    if(userAge < 21 ){
        console.log("not old enoug");

    }
    else if(userAge == 21) {
        console.log('good to go');
    }
    else {
        console.log('plenty old');
    }
}

getUserAge();

// TERNARY OPERATOR

function getAge(){
    var age = parseInt(prompt("whats my age again?"));
    (age >= "21") ? console.log('true') : console.log('false');
}

getAge();

/*
    -WRITE A FUNCTION AND PROMPT THE USER TELLING THE USER A "STORY" ASKING FOR 1 OF 3 CHOICES
    -EACH CHOICE CONTINUES TO THEIR OWN FUNCTION
    -WASH RINSE REPEAT THRICE MORE
    
    -SIMPLE VERSION:
    -ALERTS, PROMPTS, CONFIRMS
    -IF / ELSE IF() / ELSE

    -COMPLEX VERSION :
    -LOOPS && ARRAYS

*/

//INITIAL STORY
function entryStory(){
    var story = prompt("Hello and welcome to Club 500 Casino. Would you like to go to the: Restaurant, Bar or Gambling Area?");
    
    
    if(story == "Restaurant" || story == "restaurant" ){
        
        restaurant1();

    }
    else if(story == "Bar" || story == "bar"){
        Bar2();
    }
    else if(story=="Gambling Area" || story=="gambling area"){
        gamblingArea3();
    }
    else {
        alert('incorrect input, try again')
        entryStory();
    }


}


//PATH OPTION 1
function restaurant1(){
   var story1 = prompt("Looks like you are quite hungry, Can I get you something to drink in the meantime? If so would you like: Water, Soda, Beer?");
   if(story1=="water"||story1=="Water"){
        restaurant1_1();
   }   
   else if(story1 == "soda"||story1 == "Soda"){
        restaurant1_2();
   }
   else if(story1 == "Beer"||story1 == "beer"){
        restaurant1_3();
   } 
   else {
       alert('Incorrect Input, try again');
       restuarant1();
   }
}

//PATH OPTION 1_1
function restaurant1_1(){
    var story1_1 = prompt('Water it is! Ice? Tap, Mineral, or Distilled?');
    if(story1_1=="Tap" || story1_1=="tap"){
        alert("Here is your Tap Water! Enjoy");
    }
    else if(story1_1=="Mineral" || story1_1=="mineral"){
        alert('Here is your Mineral Water! Enjoy');
    }
    else if(story1_1=="Distilled" || story1_1=="distilled"){
        alert('Here is your Distilled Water! Enjoy');
    }
    else{
        alert("Sorry, Please choose one from Above");
        restaurant1_1();
    }

}
//PATH OPTION 1_2
function restaurant1_2(){
    var story1_2 = prompt('Soda it is! what kind of Soda?? Pepsi, Cola, Sprite');
    if(story1_2=="Pepsi" || story1_2=="pepsi"){
        alert("Here is your Pepsi! Enjoy")
    }
    else if(story1_2=="Cola" || story1_2=="cola"){
        alert("Here is your Coca Cola! Enjoy");
    }
    else if(story1_2=="Sprite" || story1_2=="sprite"){
        alert('Here is your Sprite! Enjoy');
    }
    else{
        alert('Sorry, Choose one from above');
        restaurant1_2();
    }
}
//PATH OPTION 1_3
function restaurant1_3(){
    var story1_3 = prompt("beer it is! Corona, Blue Moon, or Pacifico?");
    if(story1_3=="Corona" || story1_3=="corona"){
        alert("Here is your Refreshing Corona! Enjoy and drink responsibly");
    }
    else if(story1_3=="Blue Moon" || story1_3=="blue moon"){
        alert("Here is your Refreshing Blue Moon! Enjoy and drink responsibly");
        
    }
    else if(story1_3=="Pacifico" || story1_3=="pacifico"){
        alert("Here is your Refreshing Pacifico! Enjoy and drink responsibly");

    }
    else{
        alert("Sorry, Choose one from above");
        restaurant1_3();
    }
}



//PATH OPTION 2
function Bar2(){
    var story2 = prompt("In need of an alcoholic beverage? What can i get for you? A mixed drink, Beer, or Shot?: ");
    if(story2 == "mixed drink" || story2 == "Mixed Drink" ){
        Bar2_1();
    }
    else if(story2 == "Beer" || story2 == "beer"){
        Bar2_2();    
    }
    else if(story2 == "Shot" || story2 == "shot"){
        Bar2_3();
    }
    else{
        alert("Sorry, Try again");
        Bar2();
    }
    
}

// PATH OPTION 2_1
function Bar2_1(){
    var story2_1 = prompt("Mixed Drink it is! what can i get For you? AMF, Redbull Vodka, or Margarita? ");
    if(story2_1=="AMF" || story2_1=="amf"){
        alert('Here is your AMF! Enjoy and drink responsibly');
        
    }
    else if(story2_1=="Redbull Vodka" || story2_1=="redbull vodka"){
        alert('Here is your Redbull Vodka! Enjoy and drink responsibly');
        
    }
    else if(story2_1=="Margarita" || story2_1=="margarita"){
        alert('Here is your Margarita! Enjoy and drink responsibly');

    }
    else{
        alert("Sorry, Choose one from above");
        Bar2_1();
    }
    
}

// PATH OPTION 2_2
function Bar2_2(){
    var story2_2 = prompt("Beer it is! what can I get for you? Corona, Blue Moon, or Pacifico?");
    if(story2_2=="Corona" || story2_2=="corona"){
        alert('Here is your Corona! Enjoy and drink responsibly');
        
    }
    else if(story2_2=="Blue Moon" || story2_2=="blue moon"){
        alert('Here is your Blue Moon! Enjoy and drink responsibly');
        
    }
    else if(story2_2=="Pacifico" || story2_2=="pacifico"){
        alert('Here is your Pacifico! Enjoy and drink responsibly');
    
    }
    else{
        alert("Sorry, Choose one from above");
        Bar2_2();
    }
    
}

// PATH OPTION 2_3
function Bar2_3(){
    var story2_3 = prompt("Holy shot! what kind of shot would you like? Vodka, Jack Daniels, or Ciroc? ");
        if(story2_3=="Vodka" || story2_3=="vodka"){
            alert('Here is your Vodka Shot! Enjoy and drink responsibly');
            
        }
        else if(story2_3=="Jack Daniels" || story2_3=="jack daniels"){
            alert('Here is your Jack Daniels Shot! Enjoy and drink responsibly');
            
        }
        else if(story2_3=="Ciroc" || story2_3=="ciroc"){
            alert('Here is your Ciroc Shot! Enjoy and drink responsibly');
        
        }
        else{
            alert("Sorry, Choose one from above");
            Bar2_3();
        }

}



//PATH OPTION 3
function gamblingArea3(){
    var story3 = prompt("Welcome to the Gambling Area. Would you like to play: Slots, 21, or Texas Hold 'em?");
    if(story3 == "Slots" || story3 == "slots"){
        gamblingArea3_1();

    }
    else if(story3 == "21" || story3 == "twenty one"){
        gamblingArea3_2();

    }
    else if(story3 == "Texas Hold' em" || story3 == "texas hold' em" || story3 == "Texas hold' em"){
        gamblingArea3_3();

    }
    else{
        alert('Sorry, Try again');
        gamblingArea3();
    }
    

}

// PATH OPTION 3_1
function gamblingArea3_1(){
    var story3_1 = prompt("Welcome to the Slots machine! Would you like to pull the crane?");
}

// PATH OPTION 3_2
function gamblingArea3_2(){
    var story3_2 = prompt("Lets play some 21, take a seat. Your initial hand is a 6 of clubs and a 4 of Spades. Would you like to Hit, Double Down, or Surrender? ");
    if(story3_2=="Hit" || story3_2=="hit"){
        alert("You hit and got an Ace, Congratulations 21! you won $2");

    }
    else if(story3_2=="Double Down" || story3_2=="double down"){
        alert("You doubled down and got an Ace! congratulation you just won $4");
    }
    else if(story3_2=="Surrender" || story3_2=="surrender"){
        alert("You surrendered and lost $1. Better luck next hand!");
    }
    else{
        alert("Sorry, You must select an option from above");
        gamblingArea3_2();
    }
    
}

// PATH OPTION 3_3
function gamblingArea3_3(){
    var story3_3 = prompt("Howdy, shall we play some poker. Minimum Bet is $20. Your initial hand consists of Pocket Q's of Clover and Clubs. The flop was a 3 of Clovers, 3 of Clubs, and Q of Spades. The turn was a 3 of spades. The river is next and you call the shots, $100 are on the table. Are you going to Check, Bet $20, or Fold?");
    if(story3_3=="Check" || story3_3=="check"){
        alert("You checked and so did everyone else. The river was a Q of hearts. You won $100 with a 3 of a kind with Queens. Congratulations!");

    }
    else if(story3_3=="Bet $20" || story3_3=="bet $20"){
        alert("You bet an additional $20 and everyone called. $200 on the table and the river is.....a 3 of hearts. So close you lost $40! Player 1 won this hand with a four of a kind of 3's. Better Luck next time! ");
    }
    else if(story3_3=="Fold" || story3_3=="fold"){
        alert("You folded and lost only $20. Better luck next time");
    }
    else{
        alert("Sorry, Choose an option from above please");
        gamblingArea3_3();
    }
    
}

var btn1 = document.getElementsByTagName('button');


// entryStory();
