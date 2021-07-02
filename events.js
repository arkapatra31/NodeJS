const EventEmitter = require('events')

const emitter = new EventEmitter();

function simpleEvents (){
    
    //Registering a listener
    emitter.on("Emitting", function(){
    console.log("Listening to Event ---Emitting");
    });

    //Emitting an event
    emitter.emit("Emitting");

}

function eventWithArgs(){

    var listener1 = function(eventArgs){
        console.log(`Listening to event ${eventArgs.id} ${eventArgs.host}`)
    }
    
    var listener2 = (eventArgs) => console.log(`Listener 2 is listening event is ${eventArgs.id} ${eventArgs.host}`)

    emitter.on("Emitter With Args",listener1)
    emitter.on("Emitter With Args",listener2)

    emitter.emit("Emitter With Args", {id : 1, host : "Arka"});

}

eventWithArgs()
