const init = (data) => {
    const controller = {
        getAllPosts(req, res) {
            data.posts.getAll().then((result)=>{
                res.status(200);
                return res.json(result);
            });
        },
        addPost(req, res) {
            const post = req.body;
            data.posts.create({
                title: req.body.title,
                answer: req.body.answer,
                correct_answer: req.body.correct_answer,
                })
                .then(res.status(200))
                .catch(function(err) {
                    throw err;
                });
                res.redirect('/#/allPosts');
        },
    };

    return controller;
};

module.exports = {
    init,
};
