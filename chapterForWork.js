//Creating objects example
var Cat = {
  "legs" : 3,
  "name" : "Harmony",
  "color" : "Tortoiseshell"
};
console.log(Cat);

//Keys without objects example#1
var Cat = {
  legs : 3,
  name : "Harmony ",
  color : "Tortoiseshell"
};
console.log(Cat);

//Keys without objects example#2
var Cat = {
  legs : 3,
  "full name" : "harmony Philomena Snuggly-pants Morgan",
    color : "tortoiseshell"
};
console.log(Cat);

//Keys without objects example#3
var Cat = {legs : 3, nme : "Harmony", color : "Tortoiseshell"};
console.log(Cat);

//Accessing values in objects example#1
var name = Cat;
console.log(Cat);

//Accessing values in objects example#2
var Dog = { name: "pancake", age : 6, color: "white", bark: "yip yap yip!"};
var Cat = { name : "Harmony", age: 8, color : "Tortoiseshell"};
console.log(Dog);
console.log(Cat);

//Adding values to objects
var Cat = {};
Cat.legs = 3;
Cat.name = "Harmony";
Cat.color = "Tortoiseshell";
console.log(Cat);

//Combing arrays and objects
var dinosuar = [
  {name : "Tyrannosaurus Rex", period : "late cretaceuos"},
  {name : "Stegosaurus", period : "late jurdsassic"},
  {name : "Plateosaurus", period : "tirassic"}
];
console.log(dinosuar);

//An array of friends

var anna = {name :"Anna", age : 11, luckyNumbers: [2,4,8,16] };
var dave = {name : "Dave", age : 5, luckyNumbers : [3,9,40] };
var kate = {name : "Kate", age : 9, luckyNumbers: [1,2,3] };
console.log(anna);
var friends = [anna, dave, kate];
console.log(friends[1]);
console.log(friends[2].name);
console.log(friends[0].luckyNumbers);

//Useful things to do with objects
var owedMoney = {};
owedMoney.jimmy = 5;
owedMoney.Anna = 7;
console.log(owedMoney);
owedMoney.jimmy += 3;
console.log(owedMoney.jimmy);

//Storing information about your movies
var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
  },
  "Star Wars:Episode VI - Return of jedi":{
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill","harrison Ford","Carrie Fisher"],
    format: "DVD"
  },
  "Harry Potter and the Goblet": {
    releaseDate: 2005,
    duration: 157,
    actors: ["daniel radcliffe", "Emma Watson","Rupert Grint"],
    format: "blu-ray"
}
};
var findingNemo = movies["Finding Nemo"];
console.log(findingNemo.duration);
var cars = {
  releaseDate: 2006,
  duration: 177,
  actors: ["Owen Wilson","Bonnie Hurt", "Paul Newman"],
  format : "blu-ray"
};
console.log(movies);
console.log(Object.keys(movies));
