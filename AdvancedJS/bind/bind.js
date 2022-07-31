//bind is almost same as call but instead of calling the method it will bind the function to the objects and return a function which can be invoked later

let person1 = {
    name : "John",
    surname : "Doe",
    f : () => { console.log("Function from person 1") }
}

let person2 = {
    name : "Alice",
    surname : "Baker"
}

let printInfo = function(id, email) {
    console.log(`${this.name} ${this.surname} ${id} ${email}`)
}

//printInfo.call(person1, "123", "abc@test.com");
//printInfo.apply(person1, ["123", "abc@test.com"]);
let printInformation = printInfo.bind(person1, "123", "abc@test.com");
printInformation();
