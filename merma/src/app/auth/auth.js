const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
require('passport-local-authenticate');

const MongoStore = require('connect-mongo')(session);

const config = require('../config')

const applyTo = (app, data) => {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    },
    async(username, password, done) => {
        data.users.checkPassword(username, password)
            // .then(() => {
            //     return data.users.findByUsername(username);
            // })
            .then((user) => {
                done(null, user);
            })
            .catch((err) => {
                done(err);
            });
    }));
    
    app.use(flash());
    app.use(cookieParser());
    app.use(session({
        store: new MongoStore({ url: config.connectionString }),
        secret: config.sessionSecret,
        resave: true,
        saveUninitialized: true,
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    app.use((req, res, next) => {
        res.locals = {
            user: req.user,
        };

        next();
    });
};

module.exports = { applyTo };
