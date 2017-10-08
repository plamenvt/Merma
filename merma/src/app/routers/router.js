const attachTo = (app, data) => {
    const auth = require('./auth.router')(data);
    const users = require('./users.router')(data);
    const questions = require('./questions.router')(data);

    app.use('/api/', auth);
    app.use('/api/users', users);
    app.use('/api/questions', questions);
};

module.exports = { attachTo };