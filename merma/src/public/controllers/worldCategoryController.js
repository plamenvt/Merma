const worldCategoryController = function() {
    
    function all(context) {
        var world;
        jsonRequester.get('api/posts')
        .then(function(resWorld) {
          world = resWorld.filter(function (el) {
              return el.categor === 'world';
            });
            helper.setHeader(world);
            return templates.get('category');
          })
          .then(function(template) {
            context.$element().html(template(world));
          })
          .catch(function(err) {
            console.log(err);
          });
    }

    function getById(context) {        
        var world;
        jsonRequester.get('api/posts')
        .then(function(resWorld) {
            var worldId = parseInt(context.params.id);
            world = resWorld[worldId-1];
            return templates.get('post');
          })
          .then(function(template) {
            context.$element().html(template(world));
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