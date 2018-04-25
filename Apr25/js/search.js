var clientId ='FT81CoDvBZ4CrMIiqw-ZA9mIAGSxqNob';

var str = ''; 

var searchBox = document.querySelector("header input");
searchBox.addEventListener('keyup', userStr);

function githubUsers(data){
    console.log(data);
}


function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
            console.log(JSON.parse(req.responseText));
        }
        else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);

}

function userStr(evt){
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=${clientId}`, githubUsers);
    // if(evt.key !== 'Undefined' && evt.key !== 'Backspace' && evt.key !== 'Tab')
    // str += evt.key;
    // console.log(str, searchBox.value);

}