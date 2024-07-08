let container = document.querySelector(".container");
let button = document.querySelector("a");
let displayColor = document.querySelector("p");

const validHex = '0123456789ABCDEF';
const hexLen = 6;


function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomColor(){
    let color = '#';
    for(let i = 0; i < 6; i++){
        let getRandom = validHex.charAt(randomNum(0, 15));
        color += getRandom;
    }
    displayColor.innerHTML = color;
    container.style.backgroundColor = color;
}

getRandomColor();

button.addEventListener('click', function(){
    getRandomColor();
});