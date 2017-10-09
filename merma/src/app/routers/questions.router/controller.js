const init = (data) => {
    const controller = {
        getAllQuestions(req, res) {
            data.questions.getAll().then((result)=>{
                res.status(200);
                return res.json(result);
            });
        },
        addQuestion(req, res) {
            const question = req.body;
            data.questions.create({
                title: req.body.title,
                answer: req.body.answer,
                correct_answer: req.body.correct_answer,
                })
                .then(res.status(200))
                .catch(function(err) {
                    throw err;
                });
                res.redirect('/#/allQuestions');
        },
    };

    return controller;
};

module.exports = {
    init,
};
