let canvas = document.querySelector("#canvas");
let clickBtn = document.querySelector("#button");

clickBtn.addEventListener("click", ()=>{
    let alphaNumericValues = "0123456789ABCDEF";
    let hashValue = "#";
    for (let i = 0; i < 6; i++) {
        hashValue = hashValue + alphaNumericValues[Math.floor(Math.random ()* 16)];
    }
    canvas.style.backgroundColor = hashValue;
});