var paras = document.querySelectorAll('p');

// ! == NOT

// for(var i=0; i<paras.length; i++){


//     if(!paras[i].classList.contains('para')){
//         console.log('thats not true');

//     }
    
// }

console.log(3 === '3');
console.log(typeof(3));
console.log(typeof('3'));

// == LOOSE COMPARISON
// === STRICT COMPARISON
/*

var usernum = prompt('Pick a number');


if(!usernum){
    
    console.log(3 + usernum);
}
else{
    console.log('please enter something');
}

*/

// XMLHttpRequest
// console.log(new XMLHttpRequest());

var weatherkey = '10c1d929dfab518f930be0dcee25103f';
var myUl = document.querySelector('ul');
var req = new XMLHttpRequest();


req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=10c1d929dfab518f930be0dcee25103f');
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        // console.log(apiData.emojis_url);
        processData(apiData);
    }
}
req.send(null);

function processData(data){

    for(var i =0;i< data.list.length;i++){
        // console.log(data.list);
        var weatherDesc = data.list[i].weather[0].description;
        var timeOfDay;
        var myLi= `
        <li>
            <p>${weatherDesc}</p>
        </li>
        `;
        myUl.innerHTML += myLi;        
    }

}


