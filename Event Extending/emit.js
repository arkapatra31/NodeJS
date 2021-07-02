const EventEmitter = require('events');

class Emit extends EventEmitter{

    emitMessage(){
        this.emit("EmitClass")
    }

}
module.exports = Emit