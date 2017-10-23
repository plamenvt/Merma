$(() => {

    var sammyApp = Sammy('#content', function() {
        
        this.get('/', homeController.all);
        this.get('#/login', loginController.all);
        this.get('#/profile', profileController.all);
        this.get('#/politics', politicsCategoryController.all);
        this.get('#/politics/:id', politicsCategoryController.getById);
        this.get('#/sport', sportCategoryController.all);
        this.get('#/sport/:id', sportCategoryController.getById);
        this.get('#/world', worldCategoryController.all);
        this.get('#/world/:id', worldCategoryController.getById);
        
        this.get('#/users', usersController.all);
        this.get('#/join', joinController.all);
        this.get('#/login', loginController.all);
        this.get('#/logout', logoutController.all);
    });

    $(function() {
        sammyApp.run();
    });
});