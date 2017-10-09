const QuestionsData = require('./questions.data');
const UsersData = require('./users.data');
const ResponsesData = require('./responses.data');

const init = (db) => {
    return Promise.resolve({
        users: new UsersData(db),
        questions: new QuestionsData(db),
        responses: new ResponsesData(db),
    });
};

module.exports = { init };