export default class fetchAuthToken{
    
    async returnToken(token:string) {
        let encToken = new Promise((resolve,reject) => {
            resolve(Buffer.from(token).toString('base64'));
        });
        return encToken;
    }

    async fetchToken(){
        const authToken = await this.returnToken('auth123').then((data) => {return data});
        return authToken;
    }
    
}