/* globals $ */

$(() => {
    var sammyApp = Sammy('#content', function() {
        
        this.get('/', homeController.all);
        this.get('#/login', loginController.all);
        this.get('#/profile', profileController.all);
        this.get('#/allResponses', allResponsesController.all);
        this.get('#/allQuestions', allQuestionsController.all);
        this.get('#/thanks', homeController.response);
        
        this.get('#/users', usersController.all);
        this.get('#/users/register', usersController.register);
    });

    $(function() {
        sammyApp.run();
    });
});