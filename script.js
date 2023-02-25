
// I guess I need to define operator, a and b from the 
// document

// The display is also needed

// Starting from here

function operate(operator, a, b){
    if(operator=== '+'){
        return (a + b)
    }
    else if (operator === '-'){
        return (a - b)
    }
    else if (operator === '*'){
        return (a * b)
    }
    else if (operator === '/') {
        return (a / b)
    }

};



/* Create the functions that populate the display 
    when you click the number buttons.
    You should be storing the ‘display value’ 
    in a variable somewhere for use in the next step. */










const numbers = document.querySelectorAll('.number')
console.log(numbers)

for (const number of numbers) {
    number.addEventListener('click', (e) => {
        console.log(number.innerHTML)
        document.getElementById("display").innerHTML = number.textContent;
    
    });
};