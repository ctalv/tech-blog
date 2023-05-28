// import other models
const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// User has many Blog
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Blog belongs to one User
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

// User has many Blog
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Blog belongs to one User
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// export models
module.exports = { User, Blog, Comment };



