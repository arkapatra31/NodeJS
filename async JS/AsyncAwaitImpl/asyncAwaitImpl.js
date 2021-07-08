const {movieList} = require('./movieList')
const {users} = require('./users')

let suggestedMovieList = []
async function process(){    
    try{
        const user = await getCustomer(31)
        console.log(user);
        if (user[0].isGold){
            const movies = await getMovies();
            console.log(movies);
            const receipt = await sendEmail(user[0].email)
            console.log(receipt);
        }
    }
    catch(err){
        console.log(err.message);
    }
}
process();

function getCustomer(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(users)
        },2000)
    })
}

function getMovies(){
    //console.log("Suggested Movies --> ")
    return new Promise((resolve,reject) => {
        movieList.forEach(movie => {
            if(movie.suggest){
                suggestedMovieList.push(movie)
            }
        });
        setTimeout(() => {
            resolve(suggestedMovieList);
        },3000);
    });
}

function sendEmail(emailID){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(`Email sent to ${emailID}`)
        },3000);
    })
}