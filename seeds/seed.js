// import required modules
const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

// import JSON seed files
const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');


// seeds the database
// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });
//     // create multiple Uer records in the database
//   const users = await User.bulkCreate(userData, {
//     individualHooks: true, // enables Sequelize to run any defined hooks for each user creation
//     returning: true, // created user objects are returned as a result
//   });

//   // creates a new project record in the data base for each project
//   for (const blog of blogData) {
//     await Blog.create({
//       ...blog,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   await Comment.bulkCreate(commentData);
  

//   // terminate the script and exit the Node.js process
//   process.exit(0);
// };



// // runs the seeding function
// seedDatabase();

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await User.bulkCreate(userData, {
    individualHooks: true, // enables Sequelize to run any defined hooks for each user creation
    returning: true, // created user objects are returned as a result
  });
  console.log('\n----- USERS SEEDED -----\n');

  await Blog.bulkCreate(blogData);
  console.log('\n----- BLOGPOSTS SEEDED -----\n');

  await Comment.bulkCreate(commentData);
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
