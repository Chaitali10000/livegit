const FirstResult = 0;

let currentResult = FirstResult;

currentResult = (currentResult + 10) * 2 - 3 / 1;

let calculationDescription = `(${FirstResult} + 10) * 2 / 1 `;

let errorMessgae = 'An error \'' +
                    'occured';
outputResult(currentResult, calculationDescription);