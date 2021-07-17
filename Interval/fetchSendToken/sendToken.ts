const EventEmitter = require('events');

function sendToken(){
    let val = "auth123";
    return val;
}

function geToken(token:any){
    return token;
}

//Registering the object to listener
//emitter.on("connected", ()=>{ sendToken() })

function createQuantaServer(){
    let emitter = new EventEmitter();
    setInterval(() => {
        emitter.emit("fetchedToken" , sendToken());
    },2000);
    return emitter;
}

const listener = createQuantaServer();
const token1 = listener.on("fetchedToken", (data:any) => { getToken(data) } );



