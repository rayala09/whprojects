const value = 5;

document.getElementById('test').innerHTML = "I am a House: " + value;

if(value<10){
  document.getElementById('warning').innerHTML = "Warning";
}

const colors = ['red', 'orange', 'green', 'yellow'];
let result = '';

 colors.forEach(eachColor => {
   result = result + ' ' + eachColor;
 });
 document.getElementById('colors').innerHTML = result;


// for(let i=0; i<colors.length; i++){
//   result = colors[i];
// }
// document.getElementById('colors').innerHTML = result;
