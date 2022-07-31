import {infc} from './interface';

//type assertions
let empId : unknown = 989;

console.log(typeof(empId));

class features implements infc{
    sumNum(a: any, b: any): String;
    sumNum(a: Number, b: Number): Number;
    
    sumNum(a: unknown, b: unknown): String | Number {
        throw new Error('Method not implemented.');
    }

    info(name : String){
        return name
    }

    //Generics
    gen<T>(args : T) : T{
        return args;
    }

    val = (x : number) => {
        return x+1
    }

    //Rest Parameter
    rest = (name : String, ...num : Number[]) : void => {

    }

    user = { name : "John", id : 123 };
    
    
   
}