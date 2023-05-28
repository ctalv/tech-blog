// import other models
const User = require('./User');
const Blog = require('./Blog');

// User has many Blog
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Blog belongs to one User
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

// export models
module.exports = { User, Blog };