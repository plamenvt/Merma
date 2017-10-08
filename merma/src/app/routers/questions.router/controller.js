const init = (data) => {
    const controller = {
        getAllQuestions(req, res) {
                data.questions.getAll().then((result)=>{
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
