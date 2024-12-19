const display= document.getElementById('display')

function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(){
    display.value="";

}
function calculate(){
    try{
        const result = Function(`"use strict"; return (${display.value})`)();
        display.value = result;
    }
    catch(error){
        display.value="Error";
    }
}
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        e.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
