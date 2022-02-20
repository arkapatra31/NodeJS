function outer(){
    let c = 0;
    function inner(){
        c++;
        console.log(c);
    }
    inner() //inner won't print as c is not a local variable of inner and inner is a child method outer
}
console.clear()
outer()
outer() //second invocation of outer method will also print 1 as c is re-initialised with 0

console.log("------------------------------------------------------------------------------")

function outer(){
    let c = 0;
    function inner(){
        c++;
        console.log(c);
    }
    return inner // return the inner value instead of invoking it
}
const fn = outer()
fn()
fn()
