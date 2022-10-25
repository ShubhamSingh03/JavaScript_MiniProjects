let displayBox = document.querySelector(".textview");

function insert(args){
    // console.log(displayBox.value);
    displayBox.value += args;
    // console.log(displayBox.value);
}

function equals(){
    displayBox.value = eval(displayBox.value);
    // console.log(displayBox.value);
}

function clean(){
    displayBox.value = "";
}

function back(){
    displayBox.value = displayBox.value.slice(0,-1);
}