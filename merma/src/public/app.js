/* globals $ */
// var user = localStorage.getItem('user');

// if (user !== null || undefined) {
//     $('#btn-log-in').addClass('hidden');
//     $('#btn-log-out').show();
//     $('#btn-profile').show();
//     $('#btn-log-out').on('click', function(e) {
//         e.preventDefault();
//         localStorage.removeItem('user');
//         sessionStorage.removeItem('user');
//         document.location = '/#';
//         document.location.reload(true);
//       });
//   } else {
//     $('#btn-log-in').show();
//     $('#btn-log-out').addClass('hidden');
//     $('#btn-profile').addClass('hidden');
//   }

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