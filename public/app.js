(function() {

  var sammyApp = Sammy('#content', function() {

    this.get('#/', homeController.all);
    this.get('#/users', usersController.all);
    this.get('#/users/register', usersController.register);
  });

  $(function() {
    sammyApp.run('#/');
  });
}());