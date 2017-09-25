/* globals __dirname, process */

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const applyTo = (app, config) => {
    app.set('views', path.join(__dirname, '../../views'));
    app.set('view engine', 'pug');
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(cookieParser());

    const libsPath = path.join(__dirname, '../../../node_modules');
    app.use('/node_modules', express.static(libsPath));
    const staticPath = path.join(__dirname, '../../public');
    app.use('/public', express.static(staticPath));

    app.get('/', (req, res) => res.render('home'));
};

module.exports = {
    applyTo,
};
