console.log("Logging statement 1");

//Calling the asynchornous method
getRepos("Arka", (repos) => {
    console.log(`Repositories ---> ${repos}`)
})

console.log("Logging statement 2");

function getRepos(userName, callback){
    let repos = []
    setTimeout(() => {
        console.log(`Checking GitHub Reqpositories for user ${userName}`);
        callback(['GraphQL Basics', 'NodeJS']);
    },2000)
}