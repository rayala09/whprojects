let person = {
    firstName: 'John',
    lastName: 'Wick',
    age: 41,
    eyeColor: 'brown'

};

let People = function(fn, ln, a, ec){
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
    this.eyeColor = ec;
    this.greeting = function(ufn){
        return `It's nice to meet you ${ufn}! My name is ${this.firstName}`;
    }
}; 

let ray = new People("Ray", "Ayala", 20, "Brown");
let chuck = new People("Chuck", "Norris", 23, "blue");

console.log(ray, chuck);
console.log(ray.greeting('storm'));
console.log(chuck.greeting('nightcrawler'));

// People.prototype.nationality = "American";

// console.log(ray);