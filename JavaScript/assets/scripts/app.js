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

// currentResult = (currentResult + 10) * 2 - 3 / 1;

// let calculationDescription = `(${FirstResult} + 10) * 2 / 1 `;

// let errorMessgae = 'An error \'' +
//                     'occured';

// outputResult(currentResult, calculationDescription) ;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(opertor, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc}  ${opertor} ${calcNumber}`;
    outputResult(currentResult, calcDescription);

}

function writeToLog(
    operatorIdentifier, 
     prevResult,
     number,
     newResult
    ){
        const logEntry = {
            operator: operatorIdentifier,
            prevResult: prevResult,
            number: number,
            result: newResult
        };
        logValue.push(logEntry);
        console.log(logValue);
        
    }
    

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    console.log('INPUT', enteredNumber, currentResult);
     currentResult += enteredNumber;                         
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', enteredNumber, initialResult, currentResult);
}
    

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', enteredNumber, initialResult, currentResult);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *=  enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', enteredNumber, initialResult, currentResult);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', enteredNumber, initialResult, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
