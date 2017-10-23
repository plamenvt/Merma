const passport = require('passport');

const init = (data) => {
    const controller = {
        login(req, res) {
            passport.authenticate('local', function(err, user, info) {
                if (err) {
                    return res.sendStatus(400);
                }

                if (!user) {
                    return res.sendStatus(400);
                }

                return req.login(user, function(error) {
                    if (error) {
                        return res.sendStatus(400);
                    }
                    if (req.body.rememberme !== 'rememberme') {
                        req.session.cookie.expires = false;
                    }

                    res.status(200);
                    return res.json({
                        user: user
                    });
                });
            })(req, res);
        },

        logout(req, res) {
            req.logout();
            return res.sendStatus(200)
        },

        async register(req, res) {
            const username = req.body.username;
            const password = req.body.password;

            if (!username || !password) {
                res.status(409);
                return res.json({
                    message: 'Fill all info!',
                });
            }

            var user = await data.users.findByUsername(username);

            if (user) {
                res.status(409);
                return res.json({
                    message: 'Username exists!',
                });
            }

            await data.users.create({
                username: username,
                password: password
            });

            user = await data.users.findByUsername(username);

            res.status(200);
            return res.json({
                user: user
            });
        },
    };

    return controller;
};

module.exports = {
    init,
};
