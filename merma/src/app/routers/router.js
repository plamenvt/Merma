const attachTo = (app, data) => {
    const auth = require('./auth.router')(data);
    const users = require('./users.router')(data);
    const questions = require('./questions.router')(data);

    app.use('/', auth);
    app.use('/users', users);
    app.use('/questions', questions);
};

module.exports = { attachTo };