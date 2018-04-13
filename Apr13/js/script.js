var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');

var selectedArray = [];
var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "Photo of a Beach",
        title: "Huntington Beach",
        cost: 100, 
        desc: "Scenery of Huntington beach"
        
    },
    {
        img: "http://unsplash.it/256/256?image=202",
        alt: "Photo of Kearney Road",
        title: "Kearney Rd",
        cost: 75, 
        desc: "Sunrise on Kearney road"
        
    },
    {
        img: "http://unsplash.it/256/256?image=204",
        alt: "Photo of Railroad",
        title: "Old Railroad",
        cost: 125, 
        desc: "One of the first Railroads ever built!"
        
    },
    {
        img: "http://unsplash.it/256/256?image=211",
        alt: "Photo of Boat",
        title: "The Mr. Allan",
        cost: 135, 
        desc: "One of the first luxurious boats!"
        
    },
    {
        img: "http://unsplash.it/256/256?image=214",
        alt: "Photo of Downtown Fresno",
        title: "Downtown Fresno",
        cost: 145, 
        desc: "Center of Downtown Fresno"
        
    }
    
];

function displayItems(arr){
    for(var i = 0; i< arr.length; i++ ){
        // console.log(arr[i].alt)
        var item = `
            <li data-sku="${i}">
                <input type="checkbox">
                <img src="${arr[i].img}" alt="${arr[i].alt}">
                <h3>${arr[i].title}</h3>
                <p>${arr[i].cost}</p>
                <p>${arr[i].desc}</p>
                </li>
                `;
        items.innerHTML += item;
    }
    
}
displayItems(itemArray);


function addListener(arr, objArr){
    for(var i = 0; i< arr.length; i++){
        arr[i].addEventListener('click', function(evt){
            this.classList.toggle('selected');
            // TERNARY OPERATOR / AKA SUPER AWESOME IF STATEMENT
            (this.firstElementChild.checked) ?
            this.firstElementChild.checked = false :
            this.firstElementChild.checked = true;

            // console.log(this.dataset.sku, parseInt (this.dataset.sku) +1);
            selectedArray.push(objArr.slice(this.dataset.sku, parseInt(this.dataset.sku)+ 1)[0]);

            console.log(selectedArray);

            // console.log( Array.from(arr).slice(this.dataset.sku));
            // console.log(selectedArray);
            // // selectedArray.push(arr[this.dataset.sku]);
            // // console.log(this.dataset.sku);
            // // console.log(selectedArray);
        });
    }

}
addListener(items.children, itemArray);
