

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


// Groups of buttons
const container = document.querySelector(".container")
const display = document.querySelector(".display")
const digitButtons = document.querySelectorAll(".digit")
const operatorButtons = document.querySelectorAll(".operator")

// Single buttons
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")




let a = null
let b = null
let op = null

function digitPress(num) {
    num = +num
    if (a===null) {
        a = num
        display.textContent = a + " "
    } else if (b===null) {
        if (op !== null) {
            b = num
            display.textContent += b
        }

    } 

}

function operatorPress(operator) {
    console.log(operator)
    if (op === null && a !== null) {
        op = operator
        display.textContent += op + " "

    }
}

function equalsPress() {
    if (a != null && b != null && op != null) {
        display.textContent = operate(a,b,op)
        a = null
        b = null
        op = null
    }


}

function clearPress() {
    a = null
    b = null
    op = null
    display.textContent = "ENTER EXPRESSION"

}





clearButton.addEventListener("click", () => clearPress())
equalsButton.addEventListener("click", () => equalsPress())

digitButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        digitPress(btn.textContent)
    })
})

operatorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        operatorPress(btn.textContent)
    })
})



