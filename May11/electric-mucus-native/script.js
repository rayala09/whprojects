// let btn = document.querySelector('button');
// let userInput = document.querySelector('input');

// let cssColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
// console.log(cssColors);
// userInput.addEventListener('onchange', btnColor());

// // btn.addEventListener('click', disableBtn());


// function btnColor(){
//     let color = "electric mucus";
//     if(userInput.value == color){
//         console.log(userInput);
//         color = '66C88F';
//         btn.style.backgroundColor = color;
//     }
// }


// function btnColorChange() {
//     for( let i=0; i<cssColors.length; i++){
//         console.log(cssColors[i]);
//         if(cssColors[i] == userInput){
//             document.querySelector('button').style.backgroundColor = userInput;
//         }
//     }
// }

// function disableBtn(){
//     userInput.disabled = true;
//     btn.disabled = true;
// }


// SOLUTION

let input = document.querySelector('input');
let submit = document.querySelector('button');
submit.disabled = true;

input.addEventListener('keyup', () => {
    var userInput = this.value.toLowerCase();
    if(userInput == 'electric mucus'){
        submit.style.backgroundColor = 'hsl(139.4, 34.4%, 62.9%)';
        submit.disabled = false;        
    }
    else{
    submit.style.backgroundColor = this.value;
    submit.disabled = true;
    }    
});

submit.addEventListener('click', () => {
    this.disabled = true;
    input.disabled = true;

    alert('Yay. Winner!')
});