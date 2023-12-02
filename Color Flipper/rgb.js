const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

const textRed = document.getElementById('text-red');
const textGreen = document.getElementById('text-green');
const textBlue = document.getElementById('text-blue');

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

textRed.textContent = red;
textGreen.textContent = green;
textBlue.textContent = blue;

function getColor(red, green, blue){
    const colorRgb = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = colorRgb;
}

inputRed.addEventListener('change', (e) => {
    red = e.target.value;
    textRed.innerText = red;
    getColor(red, green, blue);
});

inputGreen.addEventListener('change', (e) => {
    green = e.target.value;
    textGreen.innerText = green;
    getColor(red, green, blue);
});

inputBlue.addEventListener('change', (e) => {
    blue = e.target.value;
    textBlue.innerText = blue;
    getColor(red, green, blue);
});