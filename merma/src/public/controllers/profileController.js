const profileController = function() {
    
    function all(context) {
    templates.get('profile')
        .then(function(template) {
            const body = $('body').removeClass('background-home');
            body.addClass('background-standard');
            const header = $('header').removeClass('header-home');
            header.addClass('header-standard');
            $('#carousel-container').addClass('hidden');
            $('#category-name').addClass('hidden');
            context.$element().html(template());
        });
    }
    
    return {
        all: all
    };
}();