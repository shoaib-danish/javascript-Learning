//FUNDAMENTAL PART 2

//ACTIVATING STRICT MODE

let hasDrivLic = false;
const passTest = true;

if (passTest) hasDrivLic = true;
if (hasDrivLic) console.log("I can Drive");

//FUNCTION

function logger() {
  console.log("My name is Sufi");
}

//CALLING//RUNNING//INVOKING
logger();
logger();
logger();

function frtPrcsr(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = frtPrcsr(5, 3);
console.log(appleJuice);

//FUNCTION DECLARATION

function calAge(birthYr) {
  return 2023 - birthYr;
}
const age1 = calAge(1990);
console.log("my age is", age1);

//FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(2000);
console.log("my age is", age2);

//ARROWM FUNCTION

const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const calcAge4 = (birthYear) => 2023 - birthYear;
const age4 = calcAge4(1993);
console.log(age4);

//CODING CHALLENGE #3

const calcAvg = (a, b, c) => (a + b + c) / 3;
console.log(calcAvg(5, 7, 9));

//TEST 1

let scrDolphin = calcAvg(44, 23, 71);
let scrKoalas = calcAvg(65, 54, 49);
console.log(scrDolphin, scrKoalas);

//CHECK WINNER

const checkWinner = function (avgDolphin, avgKoalas) {
  if (avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphin wins (${avgDolphin} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphin})`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(scrDolphin, scrKoalas);
checkWinner(400, 200);

//TEST 2

scrDolphin = calcAvg(85, 54, 41);
scrKoalas = calcAvg(23, 34, 27);
console.log(scrDolphin, scrKoalas);
checkWinner(scrDolphin, scrKoalas);
