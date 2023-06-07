//TERNARY OPERATOR
// alert("Hello From Operator")

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
const inputNumber= prompt("Enter a value")
alert(`The number ${inputNumber} is ${checkSign(inputNumber)}`);

