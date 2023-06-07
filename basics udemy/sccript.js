// alert("Hello world")


//SECTION 2


let js = "amzing"
console.log(js);

let firstName = 'Jonas'
console.log(firstName);

let javaScript = true;
console.log(javaScript);

console.log(typeof true);
console.log(typeof javaScript);
console.log(typeof 18);
console.log(typeof 'Sufi');

 const ageSufi = 200- 180;
 const ageDanish = 200- 185;
 console.log(ageSufi);
console.log(ageDanish + 2*5-8);

//COMPARISON OPTS
console.log(ageSufi > ageDanish);
console.log( ageDanish >= 17);

 //ASSIGNMENT OPTS
 let x = 10+ 5;
 x += 10;
 x+=5;
 x*=5
console.log(x);

const f = 'Jonas';
const l = 'Schmedtmann';;
console.log(f+' '+ l +' ' + 'is a coder');

//OPERATORS PRECEDENCE
let X, Y;
X = Y = 100-20-5;
console.log(X, Y);

const ageJonas = 200- 170;
const ageDanne = 200- 180;
const avgAge = (ageJonas + ageDanne) /2;
console.log(avgAge);


//CODING CHALLENGE#

// const massMark =75;
// const heightMark =1.7;

// const massJohn =65;
// const heightJohn =1.88;

// const BMIMark = massMark/heightMark **2;
// const BMIJohn = massJohn/heightJohn **2
// console.log(BMIMark, BMIJohn);

// console.log(BMIJohn < BMIMark);

//STRINGS AND TEMPLATE LITERALS

const fName = 'John';
const job = 'Developer';
const birthYear = 1990;
const Year = 2023;
const John =  'Hi!'+' ' + "I am"+' ' + fName + ' ' +'a'+' ' + (Year - birthYear)+ ' '
+ "years old"+ ' ' + job + '!';
console.log(John);

const johnNew = `I am ${fName}, a ${Year-birthYear} years old ${job}! `;
console.log(johnNew);

console.log('just liked this');

console.log(`String with
multiple
lines`)

 const age = 19;
 const isOldEnough = age >= 18;
 if (isOldEnough) {
   console.log('Joe can start driving 🚘');
 }

 const massMark =75;
const heightMark =1.7;
const massJohn =65;
const heightJohn =1.88;

const BMIMark = massMark/heightMark **2;
const BMIJohn = massJohn/heightJohn **2
console.log(BMIMark, BMIJohn);

// console.log(BMIJohn < BMIMark);

if(BMIJohn >  BMIMark) {

   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}`);
} else {
   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}  

//CONVERSION 

const inpYr = '1990';
console.log(Number(inpYr));
console.log( Number (inpYr) + 20);  

//COERCION

console.log('40'- '10' - '20');
console.log('40'+ '10' + '20');


//CODING CHALLENGE #3

// const scoreDolphin = (96 + 108 + 89)/3;
// const scoreKoalas = (88 + 91 + 110)/3;
// console.log(scoreDolphin, scoreKoalas);


// if(scoreDolphin > scoreKoalas) {
//    console.log('Dolphin wins the trophy🏆');
// } else if (scoreKoalas > scoreDolphin) {
//    console.log('Koalas wins the trophy');
// } else if (scoreDolphin===scoreKoalas) {
//    console.log('Both wins the trophy');
// }

//BONUS 1

const scoreDolphin = (97 + 112 + 90)/3;
const scoreKoalas = (109 + 95 + 86)/3;
console.log(scoreDolphin, scoreKoalas);


if(scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
   console.log('Dolphin wins the trophy🏆');
} else if (scoreKoalas > scoreDolphin&& scoreKoalas >= 100) {
   console.log('Koalas wins the trophy');
} else if (scoreDolphin===scoreKoalas && scoreDolphin >=100 && scoreKoalas >= 100) {
   console.log('Both wins the trophy');
} else {
   console.log('No one wins the trophy');
}

const jayScr = (30 + 20 + 30)/3;
const kayScr = (10 + 50 + 30)/3;
console.log(jayScr, kayScr);

if(jayScr > kayScr) {
   console.log('jay wins');
} else if (kayScr > jayScr){
   console.log('Kay wins the ');
} else if (jayScr= kayScr){
   console.log('No one wins');
}


//SWITCH STATEMENT

const day = 'Thursday';

switch(day) {
   case 'Monday':
   console.log('Learn Coding');
   break;
   case 'Tuesday':
   console.log('Prepare Notes');
   break;
   case 'wednesday':
   case 'Thuraday':
  console.log('Start Coding');
   // console.log('Do setup');
   break;
   case 'friday':
   console.log('Do #Challenges');
}
if (day === 'Monday') {
}else if ( day === 'wednesday' || day === 'Thursday') {
   console.log('Start Coding');
}