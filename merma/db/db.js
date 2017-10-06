const { MongoClient } = require('mongodb');

const init = (connectionString) => {
    return MongoClient.connect(connectionString)
        .then((db) => {
            console.log('Databases connected');
            return db;
        });
};

module.exports = { init };

// {
//     "questions": [
//       {
//         "title": "How the shrinkage is determined?",
//         "answer": [ 
//             "The existing relationship between the value of missing items and net sales",
//             "The existing relationship between the total stock and the value of missing items",
//             "The whole stock divided by the missing units"
//         ],
//         "correct-answer": "The existing relationship between the value of missing items and net sales",
//         "id": "42786428-94a5-49e8-a543-8400eea47287"
//       },
//       {
//         "title": "Which statement is correct?",
//         "answer": [ 
//             "We have permanent visual contact with the customers and greet them on the way in. We work faceing the customers",
//             "Clean and tidy zone is our main goal",
//             "When someone ask us for size we have to check in the stockroom first",
//             "All of them are correct"
//         ],
//         "correct-answer": "We have permanent visual contact with the customers and greet them on the way in. We work faceing the customers",
//         "id": "42786428-94a5-49e8-a543-8400eea47287"
//       },
//       {
//         "title": "When we have to show the content of our personal belongings?",
//         "answer": [ 
//             "When we are leaving the store to go on break or our shift is finished",
//             "The managers are not obligated to show their belongings",
//             "When our shift is over. When we are going on break is not necessary to do it because we will get back in the store"
//         ],
//         "correct-answer": "When we are leaving the store to go on break or our shift is finished",
//         "id": "42786428-94a5-49e8-a543-8400eea47287"
//       }
//     ]
// }