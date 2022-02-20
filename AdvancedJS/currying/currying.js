function sum (a, b, c){
    return a+b+c;
}
console.clear()
console.log(sum(2,3,5));

console.log("------------------------------------------");
console.log("\nPreparing Currying\n");

function currying(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c)
            }
        }
    }
}

let curriedSum = currying(sum)
console.log("Curried Sum = ", curriedSum(2)(3)(5))

// Breaking down curriedSum(2)(3)(5)
let add2 = curriedSum(2)
let add3 = add2(3)
let add5 = add3(5)
console.log(`\nBroke down currying function. Final Value = ${add5}\n`)