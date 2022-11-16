const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalculation, calcNumber) {
    const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);//from vendor file   
}

function wrtieToLog(operationIdentifier, prevResult, operationNumber, newResult) {

    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };

    logEntries.push(logEntry);
    console.log(logEntries);

}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput("+", initialResult, enteredNumber);
    wrtieToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
   const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput("-", initialResult, enteredNumber);
    wrtieToLog('SUBTRACT', initialResult, enteredNumber, currentResult)    
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput("*", initialResult, enteredNumber);
    wrtieToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput("/", initialResult, enteredNumber);
    wrtieToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);