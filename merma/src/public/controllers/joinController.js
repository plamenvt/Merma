const joinController = function() {
    
    function all(context) {
    templates.get('join')
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
            $('#joinin').on('click', function() {
                var username = $("#input-username").val();
                var password = $("#input-password").val();
    
                jsonRequester.post('api/register', {
                    data: {
                        username: username,
                        password: password
                    }
                })
                .then(result => {
                    $('.error').hide();
                    $('.success').html('You are successfuly registered!<br>You will be redirected shortly to login');
                    $('.success').fadeIn();
                    setTimeout(() => {
                        location.hash = '#/login';
                    }, 3000);
                })
                .catch(error => {
                    console.log(error);
                    $('.error').html(e.responseJSON.message);
                    $('.error').fadeIn();
                });
            });
        });
    }
    
    return {
        all: all
    };
}();