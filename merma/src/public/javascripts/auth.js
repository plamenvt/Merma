const auth = function () {

    function isLoggedIn() {
        const user = localStorage.getItem('user');

        if (user !== null) {
            return true;
        } else {
            return false;
        }
    }

    function initialize() {
        const user = localStorage.getItem('user');
        updateNav();
    }

    function loginUser(username) {
        localStorage.setItem('user', username);
        updateNav();
    }

    function logoutUser() {
        localStorage.removeItem('user');
        updateNav();
    }

    function updateNav() {
        const user = localStorage.getItem('user');

        if (user !== null) {
            $('.nav-logout').removeClass('hidden');

            $('.nav-login').addClass('hidden');
            $('.nav-join').addClass('hidden');
        } else {
            $('.nav-login').removeClass('hidden');
            $('.nav-join').removeClass('hidden');

            $('.nav-logout').addClass('hidden');
        }
    }

    return {
        initialize: initialize,
        isLoggedIn: isLoggedIn,
        loginUser: loginUser,
        updateNav: updateNav,
        logoutUser: logoutUser
    };
}();