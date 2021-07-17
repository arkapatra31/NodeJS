function sendToken1(){
    let val = "auth23"
    //console.log(val)
    return (val);
};

/* export async function refreshToken(){
    let val = sendToken()
    console.log(val);
    return val;
} */
module.exports =  async function getToken() {
    setInterval(() => {
     sendToken()
    },1000);
}





