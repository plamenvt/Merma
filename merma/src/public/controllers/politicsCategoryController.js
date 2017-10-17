const politicsCategoryController = function() {
    
    function all(context) {
        var politics;
        jsonRequester.get('api/posts')
        .then(function(resPolitics) {
            politics = resPolitics;
            return templates.get('politicsCategory');
          })
          .then(function(template) {
            context.$element().html(template(politics));
          })
          .then(() => {
            const body = $('body').removeClass('background-home');
            body.addClass('background-standard');
            const header = $('header').removeClass('header-home');
            header.addClass('header-standard');
            $('#carousel-container').addClass('hidden');
            $('#category-name').removeClass('hidden');
          })
          .catch(function(err) {
            console.log(err);
          });
    }

    function getById(context) {        
        var politic;
        jsonRequester.get('api/posts')
        .then(function(resPolitics) {
            var politicsId = parseInt(context.params.id);
            politic = resPolitics[politicsId-1];
            return templates.get('post');
          })
          .then(function(template) {
            context.$element().html(template(politic));
          })
          .then(() => {
            const body = $('body').removeClass('background-home');
            body.addClass('background-standard');
            const header = $('header').removeClass('header-home');
            header.addClass('header-standard');
            $('#carousel-container').addClass('hidden');
            $('#category-name').removeClass('hidden');
          })
          .catch(function(err) {
            console.log(err);
          });
    }
    
    return {
        all: all,
        getById: getById
    };
}();