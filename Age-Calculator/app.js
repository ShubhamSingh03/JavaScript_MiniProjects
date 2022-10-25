const container = document.getElementById("dob");
const error = document.querySelector(".error");
const age = document.querySelector(".age");

// user selected Date
function getAge(){
    let inputValue = dob.value;
    inputValue = inputValue.split("-");
    calcAge(Number(inputValue[0]),Number(inputValue[1]),Number(inputValue[2]));
}

function calcAge(year, mon, day){ 
    // Current Date
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    // Checking condition if someone inputed future date
    if(yyyy < year){
        error.style.display = "block";
        age.style.display = "none";
        return;
    }
    if(year === yyyy && mm < mon){
        error.style.display = "block";
        age.style.display = "none";
        return;
    }
    if(year === yyyy && mm === mon && dd < day){
        error.style.display = "block";
        age.style.display = "none";
        return;
    }
    // rounding off diffrences in date
    dd = Math.abs(dd - day);
    mm = Math.abs(mm - mon);
    yyyy = Math.abs(yyyy - year);
    displayAge(yyyy, mm, dd);
}

// displaying age on page
function displayAge(y, m, d){
    let years = document.getElementById("years");
    years.innerText = y;
    let months = document.getElementById("months");
    months.innerText = m;
    let days = document.getElementById("days");
    days.innerText= d;
}

// input event on Date Input
dob.addEventListener('input',()=>{
    error.style.display = "none";
    age.style.display = "block";
    getAge();
})


