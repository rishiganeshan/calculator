

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

const container = document.querySelector(".container")

for (let i = 0; i<10; i++) {
    button = document.createElement("button")
    button.data = i;
    container.appendChild(button)

}

let a
let b
let op

