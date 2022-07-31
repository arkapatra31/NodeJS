//Prototype chaining
let Person = function(name, id){
    this.name = name;
    this.id = id;
}

console.clear();

Person.prototype.age = 26;

let user1 = new Person('John', '123');
console.log(user1.age); // prints 26 as user1 belongs to instance Person having a proto property age

console.log(user1 instanceof Person);
console.log(Person instanceof Object);

console.log(Person.prototype); //Prints 26
console.log(user1.prototype); //Prints undefined
console.log(user1.__proto__); //Prints 26
console.log(user1.hasOwnProperty('name')); // return true
console.log(user1.hasOwnProperty('age')); // return false