const attachTo = (app, data) => {
    const auth = require('./auth.router')(data);
    const users = require('./users.router')(data);
    const questions = require('./questions.router')(data);
    const responses = require('./responses.router')(data);

    app.use('/api/', auth);
    app.use('/api/users', users);
    app.use('/api/questions', questions);
    app.use('/api/responses', responses);
};

module.exports = { attachTo };