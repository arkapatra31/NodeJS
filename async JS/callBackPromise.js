//console.log("Logging statement 1");
getUser("arkapatra31")
    .then(user => getRepos(user))
    .then(repos => getCommits(repos[0]))
    .then(commit => console.log(commit))
    .catch(err => console.log(`Error in CallBack ${err.message}`))

//console.log("Logging statement 2");

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
            console.log(`Checking GitHub Repositories for user ${userName} ['GraphQL Basics', 'NodeJS']`);
            resolve("Repos = ['GraphQL Basics', 'NodeJS']");
        },4000)
    })
}

function getCommits(repos){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Total commits are 10")
        },4000);
    })
}