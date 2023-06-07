//RANDOM FUNCTION

function randomFraction() {
    return Math.random();
}
console.log(randomFraction());
//GENERATE WHOLE RANDOM NUMBER

var randomNumberBetween0and19 = Math.floor(Math.random() *20);
function randomWholeNum() {
   
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

//parseInt Function

function convertToInteger(str) {
    return parseInt(str, 2)
}
convertToInteger("10011");
console.log(convertToInteger);