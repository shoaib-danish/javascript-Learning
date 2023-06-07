// VAR VS LET

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "Block Scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function Scope i is: ", i); 
    return i;
}
checkScope();

 //CONST KEYWORD

//  function printManyTimesI(str) {
//     "use strict";
//     const sentence = str + "is awesome";
//     for( const i = 0; i < str.length; i +=2) {
//         console.log(sentence);
//     }
//  }
// printManyTimesI("freeCodeCamp");


//ARROW FUNCTION

// var myContact = (arr1, arr2) => arr1.contact(arr2);

// console.log(myContact([1, 2], [3, 4, 5]));


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.15, -2];

const squareList = (arr) => {
const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//DEFAULT PARAMETERS

const increment = (function() {
    return function increment(number, value = 3) {
        return number + value;
    };
}) ();
console.log(increment(7, 9));
console.log(increment(7));

//REST OPERATOR

const sum = (function() {
    return function sum(...args) {
    //    const args = [ x, y, z] 
       return args.reduce((a, b)  => a + b, 0);
    };
}) ();
console.log(sum (4, 5, 6, 7, 8));

//SPREAD OPERATOR

const arr1 = ['DEC', 'FEB', 'MARCH'];
let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = "JAN";

})();
console.log(arr2);

//DESTRUCTING ASSIGNMENT
 const [z, x, , , y]= [1, 2, 3, 4, 5,];
 console.log(z, x, y);
 let a = 8, b = 6;
 (() => {
    "use strict"
    [a, b] = [b, a]

 })();

console.log(a);
console.log(b);

const source = [1,2,3,4,5,6,7,8,9,0];
function removeFirstTwo(list) {
    const [, , ,...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source)



