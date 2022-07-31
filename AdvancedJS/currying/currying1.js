function out(x,b){
    console.clear();
    const a = 10;
    return function inner(b){
        console.log(a*b*x);
    }
}

out(10)(2);