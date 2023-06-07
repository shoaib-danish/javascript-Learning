for (let rep = 1; rep <= 5; rep++) {
  console.log(`Repitition ${rep}`);
}

const mySelf = ["Shoaib", 2023 - 2004, "student"];
let i = "";
for (; i < mySelf; i++);
console.log(mySelf);

for (let i = 0; i <= 5; i++) {
  console.log(`The number is ${i}`);
}

const years = [1980, 1990, 2010, 2022];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2040 - years[i]);
}
console.log(ages);

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Satrt your exercise ${exercise}`);

  for (let rep = 1; rep < 2; rep++) console.log(`Lift your weight ${rep}`);
}

//ForIn LOOP\\

const numbers = [10, 20, 30, 40, 50];
for (let x in numbers) {
  console.log(numbers[x]);
}

let letters = ["a", "b", "c", "d"];
letters[5] = "d";
for (let arr in letters) {
  console.log(letters[arr]);
}
//for/of loop

let letter = ["a", "b", "c", "d"];
letter[5] = "d";
for (let y of letter) {
  console.log(y);
}
