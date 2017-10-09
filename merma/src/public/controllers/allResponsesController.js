const allResponsesController = function() {
    
    function all(context) {
        var responses;
        jsonRequester.get('api/responses')
        .then(function(resResponses) {
            responses = resResponses;
    
            return templates.get('allResponses');
          })
          .then(function(template) {
            context.$element().html(template(responses));
          })
          .catch(function(err) {
            console.log(err);
          });
    }
    
    return {
        all: all
    };
}();