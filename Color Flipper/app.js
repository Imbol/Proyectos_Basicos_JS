const colors = ["green", "red", "yellow", "blue", "orange", "purple", "fuchsia", "navy", "teal", "aqua", "olive", "maroon", "gray", "rgba(133, 122, 200)", "rgb(250, 128, 114)", "rgb(137, 59, 143)", "#f15025", "#8F1145", "#21B488", "#CD5C5C"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}