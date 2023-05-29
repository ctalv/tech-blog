// import other models
const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// User has many Blog
User.hasMany(Blog, {
    foreignKey: 'user_id',
    sourceKey: 'id',
    onDelete: 'CASCADE'
});

// Blog belongs to one User
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

// User has many Blog
User.hasMany(Comment, {
    foreignKey: 'user_id',
    sourceKey: 'id',
    onDelete: 'CASCADE'
});

Comment.hasOne(User, {
    foreignKey: 'user_id'
});


Comment.belongsTo(Blog, {
    foreignKey: 'blogpost_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    sourceKey: 'id'
});

// export models
module.exports = { User, Blog, Comment };



