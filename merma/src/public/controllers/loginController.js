const loginController = function() {
    
    function all(context) {
    templates.get('login')
        .then(function(template) {
            context.$element().html(template());
        })
        .then(function() {
            $('#btn-sign-in').on('click', function() {
                var username = $("#tb-username").val();
                var password = $("#tb-password").val();
    
                jsonRequester.post("api/login", {
                    data: {
                        username: username,
                        password: password
                    }
                })
                .then(result => {
                    user = result;
                    localStorage.setItem('user', user);
                    window.location.hash = '#/profile';
                    console.log(result);
                });
            });
        });
    }
    
    return {
        all: all
    };
}();