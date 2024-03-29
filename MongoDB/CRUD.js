const { mongoConnect } = require("./mongoose");
const data = require("./users.json");
const sizeof = require("object-sizeof");
const mongoConnectCls = new mongoConnect();
mongoConnectCls.connStatus;

const myModel = require("./model");
const { $where } = require("./model");

/* // Create operation --- Insert document in a Collection. If collection doesn't exist it will create a new collection based on model name
myModel.insertMany(data)
        .then(() => console.log("Data Inserted Successfully"))
        .catch((error) =>  console.log(`Error Inserting the document ${error.message}`)) */

// READ operation
async function fetchData() {
  const singleData = await myModel.findOne({ role: "admin" }).exec();
  const multipleData = await myModel.find({ role: "admin" }).exec();
  console.clear();

  console.log(`Single Data ---> ${singleData}`);
  console.log(`Multiple Data ---> ${multipleData}`);
}

// Query Parameters (Extra)
async function fetchWithParams() {
  const singleData = await myModel
    .find({ role: "admin" })
    .limit(10) //limit no of documents
    .sort({ role: 1 }) //sort document by role in asc order
    .select({ role: 1, user: 1 }) // select specific property of the doc
    .exec();
}

//Comparison , Logical Operators
/*
    async function fetchWithParams() {
    const singleData = await myModel
                        .find({ price : {$gte : 10, $lte : 20} })
                        .find({ price : {$in : [10,15,29]} })

                        //Logical
                        .find()
                        .or([{price : 10}, {role : 'Admin'}])
                        .and([])
                        
}
*/

//fetchData()

//Update Operation
async function updateData() {
  await myModel.updateOne(
    { role: "visitor" },
    { role: "guest" },
    (err, docs) => {
      if (err) {
        console.log(`Error updating ${err.message}`);
      } else {
        console.log(`Updated record ---> ${docs.message}`);
      }
    }
  );
}
//updateData()

async function findAndUpdate() {
  await myModel.findOneAndUpdate(
    { role: "guest" },
    { role: "visitor" },
    (err, docs) => {
      if (err) console.log(`Error Updating ${err.message}`);
      else console.log(`Updated Docs --> ${docs}`);
    }
  );
}
findAndUpdate();

await myModel
  .findOneAndUpdate(
    { user: "arka31" },
    {
      $set: {
        role: "Admin",
      },
    },
    { new: true }
  )
  .then((result) => console.log(result));
  
