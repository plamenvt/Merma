const attachTo = (app, data) => {
    const auth = require('./auth.router')(data);
    const users = require('./users.router')(data);
    const posts = require('./posts.router')(data);
    const responses = require('./responses.router')(data);

    app.use('/api/', auth);
    app.use('/api/users', users);
    app.use('/api/posts', posts);
    app.use('/api/responses', responses);
};

module.exports = { attachTo };