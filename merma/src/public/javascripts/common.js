/* globals $ */

function login() {
    var username = $("#tb-username").val();
    var password = $("#tb-password").val();

    jsonRequester.post("api/login", {
        data: {
            username: username,
            password: password
        }
    })
        .then(result => {
            user = result;
            localStorage.setItem('user', user);
            window.location.hash = '#/profile';
        })
        .catch(err => {
            console.log(err);
        });
}

function insertPost() {
    var id = $("#tb-id").val();
    var categor = $("#tb-categor").val();
    var title = $("#tb-tatle").val();
    var author = $("#tb-author").val();
    var post = $("#tb-post").val();

    jsonRequester.post('api/posts', {
        data: {
            id: id,
            categor: categor,
            title: title,
            author: author,
            post: post,
            date: new Date()
        }
    })
        .then(result => {
            window.location.hash = '#/';
        })
        .catch(err => {
            console.log(err);
        });
}

function insertQuestion() {
    var title = $("#tb-title").val();
    var answer = $("#tb-answer1").val();
    var answer = $("#tb-answer2").val();
    var answer = $("#tb-answer3").val();
    var correct_answer = $("#tb-correct-answer").val();

    jsonRequester.post('api/questions', {
        data: {
            title: username,
            answer: password,
            correct_answer: correct_answer
        }
    })
        .then(result => {
            window.location.hash = '#/allQuestions';
        })
        .catch(err => {
            console.log(err);
        });
}