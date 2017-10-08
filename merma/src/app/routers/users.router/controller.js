const init = (data) => {
    const controller = {
        getUserProfile(req, res) {
            data.users.getAll().then((result)=>{
            res.status(200);
            return res.json(result);
        });
        },
    };

    return controller;
};

module.exports = {
    init,
};
