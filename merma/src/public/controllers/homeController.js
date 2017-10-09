const homeController = function() {
    
    function all(context) {
        var questions;
        jsonRequester.get('api/questions')
        .then(function(resQuestions) {
            
            function shuffle(questions) {
                for (var i = 0; i < questions.length - 1; i++) {
                    var j = i + Math.floor(Math.random() * (questions.length - i));
            
                    var temp = questions[j];
                    questions[j] = questions[i];
                    questions[i] = temp;
                }
                return questions;
            }
                        
            var shuffledQuestionArray = shuffle(resQuestions);
            questions = shuffledQuestionArray.slice(0,3);

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