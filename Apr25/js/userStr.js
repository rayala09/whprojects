function userStr(evt){
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=FT81CoDvBZ4CrMIiqw-ZA9mIAGSxqNob`, githubUsers);
    // if(evt.key !== 'Undefined' && evt.key !== 'Backspace' && evt.key !== 'Tab')
    // str += evt.key;
    // console.log(str, searchBox.value);

}