const init = (data) => {
    const controller = {
        getUserProfile(req, res) {
            if (req.user) {
                const password = req.user.password;
                const username = req.user.username;

                return data.users.checkPassword(username, password)
            }
        },
    };

    return controller;
};

module.exports = {
    init,
};
