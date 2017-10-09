const { Router } = require('express');
const passport = require('passport');

module.exports = (data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router.post('/login', 
        passport.authenticate('local', {
         successRedirect: '/',
         failureRedirect: '/login',
         failureFlash: true,
        }),
        function(req, res) {
            console.log(res.body);
        }
    );
    
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
