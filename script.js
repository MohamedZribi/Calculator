

// The clear function
function  clear(){
    numArray = [];
    return document.getElementById("display").innerHTML = ""
};

// Attach clear() to its button
const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', (e) => {
    clear()
})



// Each time a number is clicked it's entered in the array
let numArray = [];
const numbers = document.querySelectorAll('.number')
for (const number of numbers) {
    number.addEventListener('click', (e) => {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + number.textContent;

        console.log(numArray.length)

        if (numArray.length == 0) {
            numArray.push(number.innerHTML)
        }
        else if (numArray.length == 1) {
            numArray[0] = numArray[0] + number.innerHTML
        }
        else if (numArray.length == 2) {
            numArray[2] =  number.innerHTML 
        }

        else if (numArray.length == 3) {
            numArray[2] =  numArray[2] + number.innerHTML 

        }



        console.log(numArray)

    });
};




// Read the operators and display them
const operators = document.querySelectorAll('.operator')
for (const operator of operators){
    operator.addEventListener('click', (e) => {

        if (numArray.length >= 3 ) {
            result = operate(numArray)
            console.log(result)
            numArray = [];
            numArray.push(result)
    
        };

        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + " " + operator.textContent + " ";
        op = operator.innerHTML
        numArray.push(op)

   
    

    })


};






function operate(numArray){

    if(op === '+'){
        result =  (Number(numArray[0]) + Number(numArray[2]))
    }
    else if (op === '-'){
        result =  (Number(numArray[0]) - Number(numArray[2]))
    }
    else if (op === '*'){
        result =  (Number(numArray[0]) * Number(numArray[2]))
    }
    else if (op === '/') {
        result =  (Number(numArray[0]) / Number(numArray[2]))
    }

    else {
        result =  "ERROR"
    } 

    // round the result

    if (result % 1 != 0) {
        result = Math.round(result * 10) / 10
    };

    document.getElementById("display").innerHTML = result
    return result

};




const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', (e) => {

    console.log('This is working')
    console.log(numArray)
    operate(numArray)

});
