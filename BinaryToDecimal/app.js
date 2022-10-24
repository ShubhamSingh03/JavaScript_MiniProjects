let convertBtn = document.querySelector(".btn");
let binaryNumber = document.querySelector("#binary");
let output = document.querySelector(".result");

convertBtn.addEventListener('click', () =>{
    event.preventDefault();
    let result = 0;
    for(let i = 0; i< binaryNumber.value.length; i++){
        if(binaryNumber.value[i] === '1'){
            result += Math.pow(2,binaryNumber.value.length-i-1)
        }
        else{
            continue;
        }
    }
    output.textContent = "Decimal Number: " + result;
})