

function add(a,b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function divide(a, b) {
    return a / b
}
function multiply(a, b) {
    return a * b
}

function operate(a,b,op) {
    if (op === "+") {
        return add(a,b)

    } else if (op === "-") {
        return subtract(a, b)


    } else if (op === "/") {
        return divide(a, b)


    } else if (op === "*") {
        return multiply(a, b)


    }
}







let a = null
let b = null
let op = null

function digitPress(num) {
    num = +num
    if (isNaN(a)) {
        a = num
        display.textContent = a + " "
    } else if (isNaN(b)) {
        display.textContent += b
    }    
}

function operatorPress(operator) {
    if (operator === null) {
        op = operator
        display.textContent += op + " "

    }
}

function equalsPress() {
    if (a != null && b != null && op != null) {
        display.textContent = operate(a,b,op)
    }


}

function clearPress() {
    let a = null
    let b = null
    let op = null

}



const container = document.querySelector(".container")
const display = document.querySelector(".display")
const digitButtons = document.querySelectorAll(".digit")
const operatorButtons = document.querySelectorAll(".operator")
const equalsButton = document.querySelectorAll(".equals")
const clearButton = document.querySelectorAll(".clear")



