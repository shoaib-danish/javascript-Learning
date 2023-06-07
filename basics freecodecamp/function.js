//FUNCTION

function ourReusableFUnction() {
    console.log("Heyya World");
}
ourReusableFUnction()

function reusableFunction() {
    console.log("Whatsup");
}
reusableFunction()

//ARGUMENTS

function ourFunctionWithArgs(a, b) {
    console.log(a-b);
}
ourFunctionWithArgs(10, 5)

function myFunctionWithArgs(a, b) {
    console.log(a+b);
}
myFunctionWithArgs(10, 5)   

//LOCAL SCOPE & FUNCTION can be seen everywhere in js

function myLocalScope() {
    var myVar = 50;
    console.log(myVar)
}
myLocalScope();

//GL0BAL VS LOCAL FUNCTION

var myTopWear = "T-shirt";
function myOutfit() {
 var myTopWear = "Sweater"
    
    return myTopWear;
}
console.log(myOutfit());
console.log(myTopWear);

//RETURN A VALUE FROM A FUNC WID RETURN

function minusSeven(num) {
    return num -7;
}
console.log(minusSeven(10))
 
function timesFive(num) {
    return num *5;
}
console.log(timesFive(6));

function plusTen(num) {
    return num +10;
}
console.log(plusTen(40));

function processArg(num) {
    return (num + 3) / 5;
}
// processed = processArg(7);
console.log(processArg(7));


