const FirstResult = 0;

let currentResult = FirstResult;
let logValue = [];

// Fuction declaration

// add(1, 5);
// add(2, 5)
// function add(x, y){
//     const result = x + y;                                   
//     alert('The result is' + result);
// }

// Return function declaration

// function myadd(num1, num2){
//     const result = num1 + num2;
//     return result;
// }                                                      

// currentResult = myadd(10, 8);

// function myadd() {
//     currentResult = currentResult + parseFloat(userInput.value);
//     outputResult(currentResult, '');
// }

// addBtn.addEventListener('click', myadd);

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(opertor, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc}  ${opertor} ${calcNumber}`;
    outputResult(currentResult, calcDescription);

}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    const logEntry = {
        operator: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logValue.push(logEntry.operator);
    console.log(logValue[1]);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


// currentResult = (currentResult + 10) * 2 - 3 / 1;

// let calculationDescription = `(${FirstResult} + 10) * 2 / 1 `;

// let errorMessgae = 'An error \'' +
//                     'occured';

// outputResult(currentResult, calculationDescription);