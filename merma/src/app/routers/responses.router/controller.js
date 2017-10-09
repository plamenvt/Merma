const init = (data) => {
    const controller = {
        getAllResponses(req, res) {
            data.responses.getAll().then((result)=>{
                res.status(200);
                return res.json(result);
            });
        },
        addResponse(req, res) {
            const response = req.body;
            data.responses.create({
                userId: req.body.id,
                name: req.body.name,
                answers: req.body.answers,
                dateCreated: new Date(),
                })
                .then(res.status(200))
                .catch(function(err) {
                    throw err;
                });
                res.redirect('/#/thanks');
        },
    };

    return controller;
};

module.exports = {
    init,
};
