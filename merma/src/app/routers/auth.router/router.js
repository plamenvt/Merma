const { Router } = require('express');
const passport = require('passport');

module.exports = (data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router.post('/login', (req, res, next) => {
        return controller.login(req, res, next);
    });

    router.post('/register', (req, res, next) => {
        return controller.register(req, res, next);
    });
    
    router.get('/logout', (req, res) => {
        req.logout();
        req.session.destroy((err) => {
            res.redirect('/');
        });

        const cookie = req.cookies;
        for (const prop in cookie) {
            if (!cookie.hasOwnProperty(prop)) {
                continue;
            }
            res.cookie(prop, '', { expires: new Date(0) });
        }
    });

    return router;
};
