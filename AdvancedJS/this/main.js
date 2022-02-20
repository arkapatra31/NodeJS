function sayMyName(name){
    console.log(`My Name is ${name}`);
}
console.log("---------------------------------");
sayMyName("Arka");
console.log("---------------------------------");

let person = {
    name : "John",
    sayName : function(){
        console.log(`My Name is ${this.name}`);
    }
}


//Implicit Binding
console.log("This is Implicit Binding")
person.sayName() 
console.log("---------------------------------")



// Explicit Binding
console.log('This is Explicit Binding');
function sayName(){
    console.log(`My name ${this.name}`);
}
sayName.call(person) 
console.log("---------------------------------");




// New Binding
function Person(name){
    this.name = name;
}
const p1 = new Person("Superman ");
const p2 = new Person("Batman");
console.log("This is New Binding")
console.log(p1.name, p2.name); 
console.log("---------------------------------");



//Default Binding
console.log("This is Default Binding");
globalThis.name = "SpiderMan";
sayName()
console.log("---------------------------------");


console.log("Precedence of Binding");
console.log("1. New Binding");
console.log("2. Explicit Binding");
console.log("1. Implicit Binding");
console.log("1. Default Binding");