const { Router } = require('express');
const passport = require('passport');

module.exports = (data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router.post('/login', passport.authenticate('local'),
        (req, res)=>{
            res.status(200);
            return res.send(req.user);

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
