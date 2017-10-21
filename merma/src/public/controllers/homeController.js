const homeController = function() {
    
    function all(context) {
        var posts;
        var post;
        
        jsonRequester.get('api/posts')
          .then(function(resPosts) {
            posts = resPosts.slice(0,3);
            posts = helper.trim(posts, 150);
            posts = helper.trimTitles(posts, 25);
            helper.setHeader(posts, 'home');
            return templates.get('home');
          })
          .then(function(template) {
            context.$element().html(template(posts));
          })
          .catch(function(err) {
            console.log(err);
          });
    }
    
    return {
        all: all,
    };
}();