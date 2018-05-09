var firstname = 'Ray';

function whatsName(){
    var lastname = 'Ayala';
    console.log(firstname);
    whatsLastName(lastname);
}
whatsName();
// console.log(lastname);

// var 
// let 
// const

const name = 'Ray';
let color = 'gray';

for(let i=0; i < 5; i++ ){
    console.log('running ' + i + ' times');
    
}

function whatsLastName(str){
    console.log(str);
    // console.log(i);
    
}


console.log(name, color);
color = 'red';
console.log(color);
// name = 'David';
// console.log(name);



// console.log(i);

// for(i; i<10; i++){
//     console.log('running ' + i + ' times');    
// }

/*

    let firstName = 'Ray';
    let lastName = 'Ayala';

    let nameCombined = `${firstName} david ${lastName}`;
    console.log(nameCombined);

    let btn = document.querySelector('button');
    // console.log(btn);
    btn.addEventListener('click', function(evt){
        console.log(this);
        var colorizer = () => this.style.color = 'red';
        colorizer();
        
    });

    var logCase = function(str){
        console.log(str);
    }

    logCase('Ray');

*/

var colors = ['red', 'orange', 'green', 'blue'];

for(let i=0; i<colors.length; i++){
    console.log(colors[i]);
}

// Javascript forEach loop
//explicity for arrays

colors.forEach(function(ele, idx){
    console.log(ele, idx);
});


//for of loop
var nums = [10, 20, 30, 40];
for(let num of nums){
    num += 1;
    console.log(num);

}

let myName = 'Ray Ayala';
for(let letter of myName){
    console.log(letter);
}