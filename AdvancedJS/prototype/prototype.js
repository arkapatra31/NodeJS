function Person () {
    this.name = 'John',
    this.age = 23
}

const person = new Person();
Person.prototype.gender = "Male";

// checking the prototype value
console.log(Person.prototype); // { ... }


let arka = {    //let arka = new Object();
    name : "Arka",
    id : 31
}
console.log(arka.__proto__);
console.log(arka instanceof Object)
