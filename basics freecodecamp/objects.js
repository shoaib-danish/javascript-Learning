// BUILD OBJECTS

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
}
ourDog.name = "Joe Camper"
ourDog.bark = "bow-bow";
delete ourDog.bark;
console.log(ourDog);

//LOOKUP

function phoneticLookup(val) {
    var lookup = {
        "alpha": "Adamas",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };
    result = lookup[val];
    
    return result;
}

console.log(phoneticLookup ("delta"));

//MANIPULATING COMPLEX OBJECTS

var myMusic = [
    {
        "artist": "Billy",
        "title": "Piano man",
        "release_year": "2000",
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
   
   {
    "artist": "Beau",
    "title": "Cereal",
    "release_year": "2005",
    "formats": [
    "Youtube Video"
    ]
    
   }
    
];

//ACCESSING NESTING OBJECTS

var myStorage = {
    "car": {
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs" 
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);



 




 
