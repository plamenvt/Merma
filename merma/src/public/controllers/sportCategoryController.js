const sportCategoryController = function() {
    
    function all(context) {
        var sport;
        jsonRequester.get('api/posts')
        .then(function(resSport) {
          sport = resSport.filter(function (el) {
              return el.categor === 'sport';
            });
            helper.setHeader(sport);
            return templates.get('category');
          })
          .then(function(template) {
            context.$element().html(template(sport));
          })
          .catch(function(err) {
            console.log(err);
          });
    }

    function getById(context) {        
        var sport;
        jsonRequester.get('api/posts')
        .then(function(resSport) {
            var sportId = parseInt(context.params.id);
            sport = resSport[sportId-1];
            return templates.get('post');
          })
          .then(function(template) {
            context.$element().html(template(sport));
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