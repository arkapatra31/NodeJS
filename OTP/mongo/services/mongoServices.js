const { userModel } = require('../model');
//insertManyUsers
async function insertBulk(bulkData){
    try{
        return await userModel.insertMany(bulkData)
        .then((data) => {
            return data.map(({userName, email, mfaEnabled}) => {
                return {
                    userName, email, mfaEnabled
                }
            })
        })
        .catch((err) => { return {Error : err} });
    } catch(error){
        return { errorMsg : "Unable to insert Data" }
    }
};

async function fetchUser(email,password){
    return await userModel.findOne({email,password})
        .then(({ userName, email, mfaEnabled }) => {
            return {
                userName, email, mfaEnabled
            }
        })
        .catch((err) => {
            return { Error : "Unable to fetch User Data" }
        })
}


module.exports = { insertBulk, fetchUser };
