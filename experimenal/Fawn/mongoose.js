var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testDB");
 
Fawn.init(mongoose);


//PERFORM CRUD
var task = Fawn.Task();
 
//assuming "Accounts" is the Accounts collection
task.update("Accounts", {firstName: "John", lastName: "Smith"}, {$inc: {balance: -20}})
  .update("Accounts", {firstName: "Broke", lastName: "Ass"}, {$inc: {balance: 20}})
  .run()
  .then(function(results){
    // task is complete 
 
    // result from first operation
    var firstUpdateResult = results[0];
 
    // result from second operation
    var secondUpdateResult = results[1];
  })
  .catch(function(err){
    // Everything has been rolled back.
    
    // log the error which caused the failure
    console.log(err);
  });



//Add new pic and remove old 
var newImageId = someMongoDbId;
 
task.saveFile("/path/to/new/profile/img", {_id: newImageId, filename: "profile.png"})
  .removeFile({_id: oldImageId})
  .update("users", {_id: userId}, {profileImageId: newImageId})
  .run()
  .then(function(results){
    var newImgFile = results[0];
    
    console.log(newImgFile.filename) // profile.png
  })
  .catch(function(err){
    // Everything has been rolled back.
    
    // log the error which caused the failure
    console.log(err);
  });