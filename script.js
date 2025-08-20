

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
    a = +a
    b = +b
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
    console.log(a)
    console.log(b)
    console.log(op)

    if (a!==null && op===null) {
        clearPress()
    }


    display.textContent += num

    
}

function operatorPress(operator) {

    // if (display.textContent !== "" && op===null) {
    //     a = display.textContent
    //     op = operator
    //     display.textContent += op


    // }
    if (display.textContent !== "") {
        if (op === null) {
            a = display.textContent
            op = operator
            display.textContent += op
            
        } else if (isNaN(display.textContent.at(-1))) {
            op = operator
            display.textContent = display.textContent.slice(0,a.length) + op
               
        }
    }

}

function equalsPress() {
    if (a === null || op === null) {
        return
    }

    if (display.textContent.length > a.length + 1) {
        b = display.textContent.slice(a.length + 1, display.textContent.length)
        if (op === "/" && b === "0") {
            alert("Can't divide by 0")
            b = null
            return
        }
        
        a = operate(a,b,op)
        b = null
        op = null
        display.textContent = a


    }


}

function clearPress() {
    a = null
    b = null
    op = null
    display.textContent = ""

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



