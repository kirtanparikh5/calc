let operator = "";
let previousValue = "";
let currentValue = "";
document.addEventListener('DOMContentLoaded',function(){
    const clear = document.querySelector("#clear-btn");
    const equals = document.querySelector(".equal");
    const decimal = document.querySelector(".decimal");

    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current")

    numbers.forEach((number) => number.addEventListener("click",function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click",function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click",function(){
        previousValue = "";
        currentValue = "";
        operator = "";
        previousScreen.textContent = ''
        currentScreen.textContent = '';
    })

    equals.addEventListener("click",function(){
        calculate();
        previousScreen.textContent = "";
        currentScreen.textContent = previousValue;
        
    })

    decimal.addEventListener("click",function(){
        addDecimal();
        currentScreen.textContent = currentValue;
    })
})

function handleNumber(num){
    if(currentValue.length < 6){
        currentValue += num;
    }
}
function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function calculate(){
     previousValue = Number(previousValue);
     currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    }
    else if(operator === '-'){
        previousValue -= currentValue;
    }
    else if(operator === 'x'){
        previousValue *= currentValue;
    }
    else if(operator = "/"){
        previousValue /= currentValue;
    }
    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function round(num){
    return Math.round(num*1000)/1000;
}

function addDecimal(){
    if(!currentValue.includes('.')){
        currentValue += '.';
    }
}