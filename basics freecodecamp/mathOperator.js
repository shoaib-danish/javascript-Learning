const x=10;
const y=20
console.log(x+y);

//ADDING, SUBTRACTING, & MULTIPLYIG, QUOTIENT NUMBERS

var sum = 20+30;
console.log(sum)

var difference = 15-5;
console.log(difference)

var product = 8*5
console.log(product)

var quotient = 100/10
console.log(quotient)

var remainder = 100/8
console.log(remainder)

//INCREMENTING NUMBERS = TO ADD

var myVar = 87;
myVar = myVar+3;
console.log(myVar)

//DECREMENTING NUMBERS = TO SUBTRACT

var myVar = 86;
myVar--;
console.log(myVar);

//DECIMAL NUMBERS ADD, MUlTIPLY, QUOTIENT

var myDecimal = 2.5;
var myDecimal = myDecimal +2.5;   //OR myDecimal++;
console.log(myDecimal)


var product = 4*2.5
console.log(product);

var quotient = 5/2.5
console.log(quotient);

var remainder = 11 % 3;
console.log(remainder);

//DECLARING STRING VARIABLES

var firstName = "Shoaib";
var lastName = "Danish";

console.log(firstName, lastName);

//ESCAPING LITERAL QUOTES
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

//PLI=US OPERATOR

var myStr = "This is the start. "  +  "This is the end. ";
console.log(myStr);

///OR

var myStr = "This is the first senetnce.";
myStr += "This is the second sentence.";
console.log(myStr);

//CONSTRUCTING STRING WITH VARIABLES

var myName = "shoaib";
var myStr = "My name is " + myName + " How are you?";
console.log(myStr);

//APPENDING VARIABLES TO STRINGS 

var ourStr = "freecodeCamp ";
var anAdjective = "is awesome! ";
ourStr += anAdjective;
console.log(ourStr);

//FIND LEMGTH OF A STRING

var firstName = 0;
var firstName = "Sufi";
firstNameLength = firstName.length;
console.log(firstNameLength);
 
lastName = "Danish";
lastName = lastName.length;
console.log(lastName);

//BRACKET NATION TO FIND FIRST CHARACTER IN STRING

 var firstLetterOffFirstName = "";
 var firstName = "Shoaib"
 firstLetterOffFirstName = firstName [0];
 console.log(firstLetterOffFirstName);

 firstLetterOffLastName = "";
 lastName = "Danish";
 lastName = lastName[0];
 console.log(lastName);

//STRING IMMUTABILITY
//TO Change First letter will have to change wholes senetence

var myStr = "Jello World";
myStr = "Hello World";
console.log(myStr);

//BRACKET NATION TO FIND Nth CHARACTER IN STRING

var lastName = "Sanish"
firstLetterOfLastName = lastName[0]
var firstLetterOfLastName = "Danish";
console.log(firstLetterOfLastName);

var firstName = "Shoaib";
var thirdLetterOfFirstName = firstName[firstName.length -3];
console.log(thirdLetterOfFirstName);

//WORD BLANKS

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
var result = "";
 result += "The " + myAdjective + " " + myNoun + " " + myVerb + "" + " to the store " + "very " + myAdverb;
return result; 
}
console.log(wordBlanks("thief", "black", "ran", "quickly"));
console.log(wordBlanks("bike", "fast", "passed", "quickly"));



 


 



 


                                                                                                                                                                                                                                                                                                                                                                               