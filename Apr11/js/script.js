
// THIS - CONTEXT BASED, LOOK TO THE LEFT OF THE DOT.

var btns = document.querySelectorAll('button');

for(var i=0; i< btns.length; i++){
    btns[i].addEventListener('click', function(evt){
        // console.log(evt.target);
        // console.log(this);
    });
}



window.addEventListener('click', function(evt){
    // console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON'){
        // console.log(evt.target);
        // console.log(this);

    }
    
});

var cars = ['Jeep', 'Honda', 'Jeep', 'Subaru'];
// console.log(cars);

// OBJECTS

var car = {
    type: 'Jeep',
    model: 'Wrangler',
    color: 'Black',
    offroad: true,
    trim: ['sunroof', 'hardtop', '4 wheel drive']

};
// console.log(car.trim);

// firstname, lastname, height, hair, haircolor, facialhair, facialhaircolor, age

var ray = {
    firstname: 'Ray',
    lastname: 'Ayala',
    age: 20,
    height: "6'0",
    hair: true,
    haircolor: 'black',
    facialhair: true,
    facialhaircolor: 'black',
    greeting: function(msg){
        // console.log(this.firstname);
        // console.log(msg + this.firstname);
        

    }

}

// console.log(ray.age);

ray.middlename = "Beckham";

// console.log(ray);

ray.middlename = "Matthew";
// console.log(ray);

ray.greeting("Hey There!");

ray.firstname = "Bruce";
ray.greeting("I'm now");

// OBJECT CONSTRUCTOR FUNCTION
function Person(first, last, age, eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
    this.greeting = function(msg){
        // console.log(msg + this.firstname);
    };
}
var myDad = new Person('Moy', 'Ayala', '63', 'brown');
// console.log(myDad);
var myMom = new Person('Lety','Ayala', '59', 'brown');
var myBigBro = new Person('Moy', 'Ayala', '23', 'green');
var myBro = new Person('Ramon', 'Ayala', '21', 'blue');

myBro.greeting("Hello");

/**
 * USERNAME
 * EMAIL
 * PASSWORD
 */
var form = document.querySelector('form');

var users = [];
// var user = 0;

// console.log(user);
function UserAcc(username, email, password){
    this.username = username;
    this.emailadrress = email;
    this.password = password;
}

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    
    users.push(
        new UserAcc(
            form.elements[0].value,
            form.elements[1].value,
            form.elements[2].value,
        )
    );
    console.log(users)
    // user += 1;
   
});
// console.log(submitBtn);
// console.log(users);
   