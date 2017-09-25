const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const init = (data) => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cookieParser());
    
    require('./setup').applyTo(app, data);
    
    require('./auth').applyTo(app, data);

    require('./routers').attachTo(app, data);

    return Promise.resolve(app);
};

module.exports = { init };