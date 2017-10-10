const seedUsers = require('../../db/users.json');
const seedQuestions = require('../../db/questions.json');
const seedResponses = require('../../db/responses.json');
const QuestionsData = require('./questions.data');
const UsersData = require('./users.data');
const ResponsesData = require('./responses.data');

const init = async (db) => {
    const collectionUsers = db.collection('users');
    if (await collectionUsers.count() === 0) {
        collectionUsers.insert(seedUsers);
    }
    const collectionQuestions = db.collection('questions');
    if (await collectionQuestions.count() === 0) {
        collectionQuestions.insert(seedQuestions);
    }
    const collectionResponses = db.collection('responses');
    if (await collectionResponses.count() === 0) {
        collectionResponses.insert(seedResponses);
    }

    return Promise.resolve({
        users: new UsersData(db),
        questions: new QuestionsData(db),
        responses: new ResponsesData(db),
    });
};

module.exports = { init };