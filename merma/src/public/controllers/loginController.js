const profileController = function() {
    
    function all(context) {
    templates.get('login')
        .then(function(template) {
            context.$element().html(template());
        });
    }
    
    return {
        all: all
    };
}();