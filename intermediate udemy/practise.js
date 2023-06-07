//---PRACTISE

const functionName = () => console.log("Hello Arrow Function");

const subtractByFive = (number) => number - 5; // declare
const result = subtractByFive(10); // call or execute
console.log(result); // result print

const myAge = (currentYear, birthYear) => currentYear - birthYear;
// console.log("My age is ", myAge(2003));

console.log(`my age is - ${myAge(2023, 2003)}`); //template literals
console.log("my age is -" + " " + myAge(2027, 2000)); //template literals

// const birthDate = prompt("what is your birth year");
// alert(`my age is ${myAge(2023, birthDate)}`);

// const sumOfTwoNumbers = (firstNumber, secondNumber) =>
//   firstNumber + secondNumber;

// const firstNumber = prompt("Insert your first number");
// const secondNumber = prompt("Insert second first number");
// alert(
//   ` The sum of two numbers  ${firstNumber} & ${secondNumber} is = ${sumOfTwoNumbers(
//     Number(firstNumber),
//     Number(secondNumber)
//   )}`
// );

// const age = prompt("Write your age");
// function adultOrNot(val) {
//   if (val >= 18) {
//     return alert("You are an adult");
//   } else {
//     return alert("You are not an adult");
//   }
// }
// adultOrNot(age);

// const marks = prompt("Write your marks");
// const yourMarks = (val) => {
//   if (val >= 90 && val <= 100) {
//     return alert("Congratulation you have passed by distinction A+ 🎖️");
//   } else if (val <= 90 && val >= 60) {
//     return alert("Congratulation you have got B 🥈");
//   } else if (val >= 30 && val <= 60) {
//     return alert("Congratulation you have got C 🥉");
//   } else if ((val = 30 && val <= 30)) {
//     return alert("You are Failed 😞");
//   }
// };

// yourMarks(marks);

// const celciusInput = prompt("Write the temparature in celcius");

// const convertTofahrenheit = (celcius) => {
//   const fahrenheit = celcius * (9 / 5) + 32;
//   return alert(`Temparature in Fahrenheit = ${fahrenheit}`);
// };

// convertTofahrenheit(celciusInput);6zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

let car = "BMW";
car = "Volvo";
console.log(car);

{
  let x = 10;
  x = 15;
  console.log(x);
}
{
  let x = 5;
  x = x + 10;
  console.log(x);
}

let x = 5 + 5;
let y = 5 + "5";
let z = "5" + "5";
console.log(x, y, z);

Number(Math.PI);
console.log(Math.PI);

{
  let y = "john";
  x = +y;
  console.log(x);
}

let age = 18;
const drink = age >= 18 ? "Can drink wine" : "Cannot drink wine";
console.log(drink);

const ifAge = 16;
if (ifAge >= 18) {
  console.log("He can drive");
} else {
  console.log("He cannnot drive");
}

const Car = { type: "Fiat", model: "500", Color: "White" };
console.log("The car type is", Car.type);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
fruits.push("Kiwi", "Grapes");
fruits[3] = "Lemon";
console.log(fruits.toString());

// const number = prompt("Enter a number: ");
// {
//   if (number % 2 == 1) {
//     alert("The number is odd");
//   } else {
//     alert("The number is even");
//   }
// }

const differentCars = ["BMW", "VOLVO", "FERRARI"];
differentCars.push("Kia", "suzuki");
differentCars.pop();
console.log(differentCars);

// const baseOfTriangle = prompt("Enter the base of a triangle: ");
// const heightOfTriangle = prompt("Enter the height of a triangle: ");

// const areaofTriangle = (baseOfTriangle * heightOfTriangle) / 2;
// alert(`The area of triangle is ${areaofTriangle}`);

const employee = {
  name: "Shoaib",
  myAge: 18,
  company: "GlobusLab",
  date: 2022,
};

console.log(
  `My name is ${employee.name} and I am ${employee.myAge} years old. Working in ${employee.company}, since ${employee.date}`
);

const numberArray = [2, 4, 6, 12, 11, 13, 15, 17];
const filteredNumber = numberArray.filter((item) => item >= 10);
const checkEven = numberArray.filter((item) => item % 2 == 0);
const oddNumbers = numberArray.filter((item) => item % 2 == 1);
// NOTES: filter method does not mutate or modify orignal array

console.log({ oddNumbers });
console.log({ numberArray });
console.log(numberArray.length);
console.log(typeof numberArray);

const numbers = [6, 11, 10, 100, 45];
const indexFound = numbers.findIndex((element) => element > 15);
console.log(indexFound);
