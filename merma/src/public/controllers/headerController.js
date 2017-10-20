const headerController = function() {
    
    function get(response, type) {
        var posts;
        jsonRequester.get('api/posts')
        .then(function(res) {
            return templates.get('header');
            })
            .then(function(template) {
              $('#header').html(template(response));
              if(type == 'home') {
                const body = $('body').removeClass('background-standard');
                body.addClass('background-home');
                const header = $('header').removeClass('header-standard');
                header.addClass('header-home');
                $('#carousel-container').removeClass('hidden');
                $('#category-name').addClass('hidden');
              } else {
                const body = $('body').removeClass('background-home');
                body.addClass('background-standard');
                const header = $('header').removeClass('header-home');
                header.addClass('header-standard');
                $('#carousel-container').addClass('hidden');
                $('#category-name').removeClass('hidden');
              }
            })
            .catch(function(err) {
              console.log(err);
            });
    }

    return {
        get: get
    };

}();