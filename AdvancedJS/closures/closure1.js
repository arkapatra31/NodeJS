function out(){
    console.clear();
    const a = 10;
    return function inner(){
        console.log(a);
    }
}

out()();

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function