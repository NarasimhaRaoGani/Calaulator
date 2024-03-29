
const display = document.getElementById("display");

function showInDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calc(){
    display.value = eval(display.value)
}