const QuestionsData = require('./questions.data');
const UsersData = require('./users.data');

const init = (db) => {
    return Promise.resolve({
        users: new UsersData(db),
        questions: new QuestionsData(db),
    });
};

module.exports = { init };