const display= document.getElementById('display')
//shows input on screen
function appendToDisplay(input){
     const validInputs = "0123456789+-*/().";
    if (validInputs.includes(input)) {
        display.value+=input;
    }
}

//clears display
function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        const expression = display.value.trim();
        if (/[\+\-\*\/\.]$/.test(expression)) {
            throw new Error("Invalid Expression");
        }
        
        const result = Function(`"use strict"; return (${display.value})`)();
        display.value = result;
    }
    catch(error){
        display.value="Error";
    }
}
//keybaord support for enter,clear and backspace
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
