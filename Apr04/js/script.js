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
    var story = prompt("Hello and welcome to Club One Casino. Would you like to go to the: Restaurant, Bar or Gambling Area?");

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
   var story1 = prompt("Looks like you are quite hungry, Can I get you something to drink in the meantime? If so would you like: water, soda, Beer?");
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
    var story1_1 = prompt('Water it is! Ice? Tap?');
}
//PATH OPTION 1_2
function restaurant1_2(){
    var story1_2 = prompt('Soda it is! what kind of Soda??');
    
}
//PATH OPTION 1_3
function restaurant1_3(){
        var story1_3 = prompt("beer it is! HMM How old are you?");
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
    var story2_1 = prompt("Mixed Drink it is! what can i get For you");
    
}

// PATH OPTION 2_2
function Bar2_2(){
    var story2_2 = prompt("Beer it is! what can I get for you?");
    
}

// PATH OPTION 2_3
function Bar2_3(){
    var story2_3 = prompt("Holy shot! what kind of shot would you like?");

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
    var story3_1 = prompt("Welcome to the Slots machine!");
}

// PATH OPTION 3_2
function gamblingArea3_2(){
    var story3_2 = prompt("Lets play some 21, take a seat. ");
    
}

// PATH OPTION 3_3
function gamblingArea3_3(){
    var story3_3 = prompt("Howdy, shall we play some poker. Find a seat");

}

entryStory();