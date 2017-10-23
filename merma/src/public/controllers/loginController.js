const loginController = function() {
    
    function all(context) {
    templates.get('login')
        .then(function(template) {
            const body = $('body').removeClass('background-home');
            body.addClass('background-standard');
            const header = $('header').removeClass('header-home');
            header.addClass('header-standard');
            $('#carousel-container').addClass('hidden');
            $('#category-name').addClass('hidden');
            context.$element().html(template());
        })
        .then(function() {
            $('#login').on('click', function() {
                var username = $("#input-username").val();
                var password = $("#input-password").val();
    
                jsonRequester.post('api/login', {
                    data: {
                        username: username,
                        password: password
                    }
                })
                .then(result => {
                    auth.loginUser(result.user.username);
                    window.location.hash = '#/profile';
                })
                .catch(error => {
                    console.log(error);
                    $('.error').html('Username or password is incorrect!');
                    $('.error').fadeIn();
                });
            });
        });
    }
    
    return {
        all: all
    };
}();