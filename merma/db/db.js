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
//     [
//       {
//         "id": "1",
//         "categor": "politics",  
//         "title": "Donald Trump is robot!",
//         "author": "Gosho from Vacation",
//         "post": "I'm almost positive Trump isn't a robot. Why? Because Trump is too erratic to be a robot. Unless the tech people are lying about their progress of AI, Trump is a mortal. Firstly, we know Trump was once a child. This is proof that The Donald was indeed born normally. He's been around an awfully long time too, and he's been in the public eye for decades. He has children, and that also rules out the possibility that he's a robot. Also, AI can't feel anything, and we know that Trump has very strong feelings toward people he sees as triggers, like Rosy O'Donnell or Kristen Stewart. He often goes off-script, which shouldn't happen, as Trump should be programmed recite the speech verbatim. Clearly, he's not a robot, unless he's an AI experiment gone haywire.",
//         "comments": [
//             {
//                 "name": "Ivan Goshov",
//                 "comment": "Fack, this sounds legic",
//                 "replays": [{}],
//                 "dateComment": new Date()
//             }
//         ],
//         "date": new Date()
//       },
//       {
//         "id": "2",
//         "categor": "sport",  
//         "title": "Michael Phelps is genetically modified shark",
//         "author": "Cecka Cacheva",
//         "post": "The 28-time Olympic medalist was racing as part of the Discovery Channel’s Shark Week. To avoid a celebrity being eaten on live television, the shark was computer-generated, with its time based on the speed of its real-life counterparts through the water. Because humans struggle to reach speeds of more than 5.5mph in the water, while sharks can easily reach 25mph, Phelps was given a little help. He was outfitted with a wetsuit to reduce drag and a monofin as a stand-in for a shark’s hugely powerful tail.",
//         "comments": [
//             {
//                 "name": "Krisko Beats",
//                 "comment": "The science gone too far.",
//                 "replays": [{}],
//                 "dateComment": new Date()
//             }
//         ],
//         "date": new Date()
//       },
//       {
//         "id": "3",
//         "categor": "politics",  
//         "title": "The Trump family left the White House in secret, allegedly fled to Mexico",
//         "author": "Zhelyo",
//         "post": "According to reports in Mexican media outlets Melania Trump has been seen this afternoon in Mexico. She is known to be the only one in Trumps family and White House's administration that speaks foreign languages ​​and has the chance to buy water and bread from local merchants, experts deducted. It was the scandal with the Leader of The Free World's largest son bringing the smoldering for months scandal to a new phase. Legal experts speculate that now we have enough to think better of the Bulgarian officials meddling with the Russians and stop saying they are the stupidest of all.",
//         "comments": [
//             {
//                 "name": "Doncho",
//                 "comment": "What the heck I am reading.",
//                 "replays": [{}],
//                 "dateComment": new Date()
//             }
//         ],
//         "date": new Date()
//       }
//     ]
// }







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
