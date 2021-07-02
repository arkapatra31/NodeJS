const emitCls = require('./emit')

const obj = new emitCls()

//Registering the object to listener
obj.on("EmitClass", function(){
    console.log("listening to Emit.js from listen.js")
})

//Emit the object
obj.emitMessage();


