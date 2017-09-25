const QuestionsData = require('./questions.data');
const UsersData = require('./users.data');

const init = (db) => {
    return Promise.resolve({
        users: new UsersData(db),
        items: new QuestionsData(db),
    });
};

module.exports = { init };