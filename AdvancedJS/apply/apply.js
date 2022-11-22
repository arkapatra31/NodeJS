// The apply() method is similar to the call() method
// The difference is 
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.


//With call(), an object can use a method belonging to another object. Basically it is used for function borrowing

let person1 = {
    name : "John",
    surname : "Doe",
    f : function() { console.log(`${this.name} ${this.surname}`) }
}

let person2 = {
    name : "Alice",
    surname : "Baker"
}

let printInfo = function(id, email) {
    console.log(`${this.name} ${this.surname} ${id} ${email}`)
}

//printInfo.call(person1, "123", "abc@test.com");
printInfo.apply(person1, ["123", "abc@test.com"]);

person1.f.apply(person2);
