
//SIMPLE FIELDS

const createPerson = (name, age, gender) => ( {name, age, gender});
console.log(createPerson("Zodiac", 30, "male"))

//DECLARATIVE FUNCTION

const bicycle = {
    gear: 5,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(2);
console.log(bicycle.gear);

//CLASS SYNTAX

class SpaceShuttle {
    constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
}
var zeus = new SpaceShuttle('Earth');
console.log(zeus.targetPlanet);

//GETTERS AND SETTERS

class book {
    constructor(author){
        this._author;
    }
    //getter
    get writer(){
        return this._author;
    }
    //setter

    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

//IMPORT AND EXPORT


const cap = capitalizeString("hello");
console.log(cap);
