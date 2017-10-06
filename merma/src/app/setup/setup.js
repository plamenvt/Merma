/* globals __dirname, process */

const express = require('express');
const path = require('path');

const applyTo = (app, config) => {
    app.set('views', path.join(__dirname, '../../views'));
    app.set('view engine', 'pug');

    const libsPath = path.join(__dirname, '../../../node_modules');
    app.use('/node_modules', express.static(libsPath));
    const staticPath = path.join(__dirname, '../../public');
    app.use('/public', express.static(staticPath));

    app.get('/', (req, res) => res.render('layout'));
};

module.exports = {
    applyTo,
};
