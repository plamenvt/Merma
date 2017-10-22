const logoutController = function() {
    
    function all(context) {
        jsonRequester.get('api/logout')
        .then(function(res) {
            helper.setHeader(res, 'home');
            return templates.get('home');
            })
            .then(function(template) {
                context.$element().html(template());
                auth.logoutUser();
            })
            .catch(function(err) {
              console.log(err);
            });
    }

    return {
        all: all
    };

}();