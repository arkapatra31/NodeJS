import moment from 'moment';
import git from 'simple-git';
import { faker } from '@faker-js/faker';

const simpleGit = git();

async function makeCommit(n) {
    if (n === 0) return simpleGit.push();
    else {
        for (let i = 0; i < n; i++) {
            const x = Math.floor(Math.random() * 3); // Generate a random integer between 0 and 54
            const y = Math.floor(Math.random() * 7);  // Generate a random integer between 0 and 6
            const DATE = moment().subtract(0, 'y').add(0, 'd').subtract(x, 'w').subtract(y, 'd').format();
            console.log(DATE);
            const commitMessageID = faker.database.mongodbObjectId();
            //Create Empty Commit
            await simpleGit.commit(`${commitMessageID} --> ${DATE}`, {
                '--allow-empty': null,
                '--date': DATE
            });

            await simpleGit.push('origin', 'nodeGitCore');
        }
    };
};

await makeCommit(200);