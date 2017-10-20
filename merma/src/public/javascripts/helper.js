const helper = function() {

    function setHeader(res, type) {
        return Promise.all([
            headerController.get(res, type)
        ]);
    }

    function trim(posts, symbols) {
        for (var i = 0; i < posts.length; i++) {
            var originalPost = posts[i].post;
            posts[i].post = originalPost.slice(0, symbols);
        }
        return posts;
    }

    function trimTitles(posts, symbols) {
        for (var i = 0; i < posts.length; i++) {
            var originalPost = posts[i].title;
            posts[i].title = originalPost.slice(0, symbols);
        }
        return posts;
    }

    return {
        setHeader,
        trim,
        trimTitles
    };

}();