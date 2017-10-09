const allQuestionsController = (function() {
    
    function all(context) {
        var questions;
        jsonRequester.get('api/questions')
        .then(function(resQuestions) {
            questions = resQuestions;
            console.log(questions)
    
            return templates.get('allQuestions');
          })
          .then(function(template) {
            context.$element().html(template(questions));
          })
          .then(function(resQuestions) {
            $('#add-question').on('click', function() {
                $('#addQuestionsForm').show();
                $('#questions-table').addClass('hidden');
                $('#add-question').addClass('hidden');
                $('#addQuestionTitle').show();
                $('#allQuestionTitle').addClass('hidden');
            });
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    
    return {
        all: all
    };
}());