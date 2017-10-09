const homeController = function() {
    
    function all(context) {
        var questions;
        jsonRequester.get('api/questions')
        .then(function(resQuestions) {
            questions = resQuestions;
            console.log(questions);
            
            return templates.get('home');
          })
          .then(function(template) {
            context.$element().html(template(questions));
          })
          .then(function(questions) {
            $('#next-section').on('click', function() {
                $('#questions').show();
                $('#user-info').addClass('hidden');
            });
          })
          .catch(function(err) {
            console.log(err);
          });
    }

    function response(context) {
        templates.get('thanks')
        .then(function(template) {
            context.$element().html(template());
        });
    }
    
    return {
        all: all,
        response: response
    };
}();