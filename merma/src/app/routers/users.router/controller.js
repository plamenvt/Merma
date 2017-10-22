const init = (data) => {
    const controller = {
        getUserProfile(req, res) {
            data.users.getAll().then((result)=>{
            return res.json(result);
        });
        },
    };

    return controller;
};

module.exports = {
    init,
};
