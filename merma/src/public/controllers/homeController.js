const homeController = function() {
    
    function all(context) {
        var posts;
        var post;
        jsonRequester.get('api/posts')
        .then(function(resPosts) {
            posts = resPosts.slice(0,3);
            
            function trim(posts) {
                for (var i = 0; i < posts.length; i++) {
                    var originalPost = posts[i].post;
                    posts[i].post = originalPost.slice(0, 200);
                }
                return posts;
            }
            posts = trim(posts);
            return templates.get('home');
          })
          .then(function(template) {
            context.$element().html(template(posts));
          })
          .then(() => {
            $('#category-name').addClass('hidden');
            const body = $('body').removeClass('background-standard');
            body.addClass('background-home');
            const header = $('header').removeClass('header-standard');
            header.addClass('header-home');
            $('#carousel-container').removeClass('hidden');
          })
          .catch(function(err) {
            console.log(err);
          });
    }
    
    return {
        all: all,
    };
}();