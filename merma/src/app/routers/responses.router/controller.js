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
            var corAnswersRes = req.body.correct_answers;
            var chechedAnswers = [];
            var answersRes = req.body.answers;
            function correctRes(corRes, answersRes) {
                var isTrue = [];
                for (var i = 0; i < answersRes.length; i++) {
                    if (corRes[i] === answersRes[i]) {
                        isTrue[i] = true;
                    }
                    else
                    {
                        isTrue[i] = false;
                    }
                }
                return isTrue;
            }
            chechedAnswers = correctRes(corAnswersRes, answersRes);
            data.responses.create({
                userId: req.body.id,
                name: req.body.name,
                isTrue: chechedAnswers,
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
