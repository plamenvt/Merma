const seedUsers = require('../../db/users.json');
const seedPosts = require('../../db/posts.json');
const seedResponses = require('../../db/responses.json');
const PostsData = require('./posts.data');
const UsersData = require('./users.data');
const ResponsesData = require('./responses.data');

const init = async (db) => {
    const collectionUsers = db.collection('users');
    if (await collectionUsers.count() === 0) {
        collectionUsers.insert(seedUsers);
    }
    const collectionPosts = db.collection('posts');
    if (await collectionPosts.count() === 0) {
        collectionPosts.insert(seedPosts);
    }

    return Promise.resolve({
        users: new UsersData(db),
        posts: new PostsData(db),
    });
};

module.exports = { init };