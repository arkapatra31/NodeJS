console.log("Logging statement 1");

//Calling the asynchornous method
/* getUser('arkapatra31', (user) => {
    console.log(user)
    getRepos(user, (repos) => {
        console.log(`Repositories ---> ${repos}`)
        getCommits(repos, (commit)=> {
            repos.forEach(element => {
                //This tree is called CallBack Hell
            });
        })
        
    })
}) */

//Finally calling callbacks using named function
getUser('arkapatra31', getRepositories)

//Using named function to solve callback hell
function getRepositories(user){
    getRepositories(user,getCommits)
}
function getCommits(repos){
    getCommits(repos,displayCommits)
}
function displayCommits(commits){
    console.log(commits);
}



console.log("Logging statement 2");

function getUser(userName, callback){
    setTimeout(() => {
        console.log("Logging userName")
        callback(userName)
    },2000)
}

function getRepos(userName, callback){
    setTimeout(() => {
        console.log(`Checking GitHub Reqpositories for user ${userName}`);
        callback(['GraphQL Basics', 'NodeJS']);
    },4000)
}

function getCommit(repos,callback){
    setTimeout(() => {
        let cnum = 1
        callback(++cnum)
    },4000)
}