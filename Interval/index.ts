

function getToken(){
    const token:String = "auth_token";
    return token;
}

async function runFetchToken(time:number) {
    try{
        setInterval(() => { console.log(getToken()) }, 1000);

    }catch(error){
        console.error(error.message);
    }
}