const { mongoConnect} = require ('./mongoose')
const data = require('./users.json')
const sizeof = require('object-sizeof');
const mongoConnectCls = new mongoConnect();
mongoConnectCls.connStatus;

const myModel = require('./model')

/* // Create operation --- Insert document in a Collection. If collection doesn't exist it will create a new collection based on model name
myModel.insertMany(data)
        .then(() => console.log("Data Inserted Successfully"))
        .catch((error) =>  console.log(`Error Inserting the document ${error.message}`)) */

// READ operation
async function fetchData() {
    const singleData = await myModel.findOne({role:'admin'}).exec();
    const multipleData = await myModel.find({role:'admin'}).exec();
    console.clear()

    console.log(`Single Data ---> ${singleData}`);
    console.log(`Multiple Data ---> ${multipleData}`);
}
//fetchData()

//Update Operation
async function updateData(){
    await myModel.updateOne({role:'visitor'},{role:'guest'}, (err,docs) => {
        if(err){
            console.log(`Error updating ${err.message}`)
        }
        else{
            console.log(`Updated record ---> ${docs.message}`)
        }
    });
}
//updateData()

async function findAndUpdate(){
    await myModel.findOneAndUpdate({role:'guest'},{role:'visitor'}, (err,docs) => {
        if(err)console.log(`Error Updating ${err.message}`);
        else console.log(`Updated Docs --> ${docs}`);
    })
}
findAndUpdate()
