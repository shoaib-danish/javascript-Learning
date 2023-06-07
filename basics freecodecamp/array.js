
//ARRAYS: Starts and Ends with Brackets

var ourArray = ["John", "20"];
console.log(ourArray);

//NESTED ARRAYS

var myArray = [["The World", 45], ["has everythimg"]]
console.log(myArray);

//ACCESC ARRAY DATA WITH INDEXES
var myArray = [50, 60, 70];
var myData = myArray[1]
console.log(myData);

//MODIFY ARRAY

var myArray = [70, 90, 100];
myArray[0] = 80;
console.log(myArray);
  
//ACCESS MULTI-DIMENSIONAL ARRAYS

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
console.log(myData);

//MANIPULATE ARRAYS with push()

var ourArray = ["stimpson", "Cat"];
ourArray.push(["happy", "joy"]);

//MANIPULATE ARRAYS with POP()

var myArray = [["John", 23], ["Cat", 10]];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

//MANIPULATE ARRAYS with SHIFT()

var myArray = [["john", 20], ["Doe", 15]];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);

//MANIPULATE ARRAYS with UNSHIFT()

var ourArray = ["Stimpson", "J", "Cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray);









 





