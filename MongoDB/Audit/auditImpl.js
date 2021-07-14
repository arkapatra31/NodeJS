const { connect } = require('./connection');
const mongoConnect = new connect();

const { auditModel } = require('./auditModel');


// Function call
auditModel.insertMany(
    {
        name: "Arka",
    }
)

//auditModel.deleteMany({name:"Arun"}).exec();
