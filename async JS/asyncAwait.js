//Promise Based Approach
/* getUser("arkapatra31")
    .then(user => getRepos(user))
    .then(repos => getCommits(repos[0]))
    .then(commit => console.log(commit))
    .catch(err => console.log(`Error in CallBack ${err.message}`)) */

//Async-Await Approach
async function displayDetails(){
    try{

        const user = await getUser("arkapatra31")
        console.log(user)
        const repos = await getRepos(user)
        console.log(repos)
        const commit = await getCommits(repos[0])
        console.log(commit)
    
    }catch (err) {
        console.log(err.message)
    }
}
displayDetails()


function getUser(userName){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Logging userName")
            resolve(`Username = ${userName}`)
        },2000)
    })
}

function getRepos(userName){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Checking GitHub Repositories for user ${userName}`);
            //resolve("Repos = ['GraphQL Basics', 'NodeJS']");
            reject(new Error("No repositories found"))
        },2000)
    })
}

function getCommits(repos){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Searching for commits");
            resolve(`Total Commits = 10`)
        },2000);
    })
}