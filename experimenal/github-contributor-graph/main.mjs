import moment from 'moment';
import git from 'simple-git';

const simpleGit = git();

async function makeCommit(n) {
    console.log(await simpleGit.checkIsRepo());

    // Check the repo name
    console.log(await simpleGit.revparse(['--show-toplevel']));

    if (n === 0) return simpleGit.push();
    else {
        for (let i = 0; i < n; i++) {
            const x = Math.floor(Math.random() * 55); // Generate a random integer between 0 and 54
            const y = Math.floor(Math.random() * 7);  // Generate a random integer between 0 and 6
            const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
            console.log(DATE);
            // Create Empty Commit
            await simpleGit.commit(`Commit for ${DATE}`, {
                '--allow-empty': null,
                '--date': DATE
            });

            await simpleGit.push('origin', 'nodeGitCore');
        }
    };
};

await makeCommit(500);