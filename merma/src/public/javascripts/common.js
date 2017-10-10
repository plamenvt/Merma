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
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
}

function insertResponse() {
    var userId = $("#id").val();
    var name = $("#name").val();
    var answers = $("#answers").val();
    var corAnswersRes = $("#correct_answers").val();

    var chechedAnswers = [];
    function correctRes(corRes, answersRes) {
        var isTrue = [];
        for (var i = 0; i < answersRes.length; i++) {
            if (corRes[i] === answersRes[i]) {
                isTrue[i] = true;
            }
            else
            {
                isTrue[i] = false;
            }
        }
        return isTrue;
    }
    chechedAnswers = correctRes(corAnswersRes, answers);

    jsonRequester.post('api/questions', {
        data: {
            userId: username,
            name: password,
            isTrue: chechedAnswers,
            answers: answers,
            dateCreated: new Date()
        }
    })
        .then(result => {
            window.location.hash = '#/thanks';
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