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
                id: req.body.id,
                categor: req.body.categor,
                title: req.body.title,
                author: req.body.author,
                post: req.body.post,
                date: new Date(),
                })
                .then(res.status(200))
                .catch(function(err) {
                    throw err;
                });
                res.redirect('#/');
        },
    };

    return controller;
};

module.exports = {
    init,
};
