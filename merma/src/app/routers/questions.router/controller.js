const init = (data) => {
    const controller = {
        getAllQuestions(req, res) {
            return data.questions.getAll()
        },
    };

    return controller;
};

module.exports = {
    init,
};
