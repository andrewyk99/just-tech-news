const User = require('./User');
const Post = require('./Post');

// Create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Defining relationship of the Post model to the User, constraint is that a post can belong to one user, not many users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };