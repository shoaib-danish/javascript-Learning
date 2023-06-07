//WHILE LOOPS

var myArray = [];

var i = 0;
while(i < 6) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//FOR LOOPS

var ourArray = [];
for (var i = 0; i <9; i++) {
    ourArray.push(i);
}

console.log(ourArray);

//ODD NO'S WITH A FOR LOOP
var myArray = [];

 for (var i =1; i < 10; i += 2) {
    myArray.push (i);
}
console.log(myArray);

//COUNT BACKWARDS

var ourArray = [];

for (var i = 10; i > 0; i -=2) {
    ourArray.push(i);
}
console.log(ourArray);

  // DO WHILE LOOP

var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5)  
console.log(i, myArray);

//PROFILLE LOOKUP

var contacts = [
  {
    "firstName": "Akira",
    "lastName" : "Laine",
    "number" : "849830830",
    "likes" : ["pizza", "coding", "sports"]
  },
  {
    "firstName": "John",
    "lastName" : "Doe",
    "number" : "849830830",
    "likes" : ["Hogwarts", "coding", "sports"]
  },
  {
    "firstName": "bran",
    "lastName" : "Lara",
    "number" : "unknown",
    "likes" : ["pizza", "javaScript", "sports"]
  },

]
function lookupProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
     if(contacts[i].firstName === name) {
        return contacts[i][prop] || "no such property";
     }   
    }
    return "No such contacts"
  }

  var data = lookupProfile("bran", "likes");
console.log(data);
