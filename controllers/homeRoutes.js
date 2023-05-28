const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

// get route to see all blogposts
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });


    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// signed out, nav links go to login page (handlebars)



module.exports = router;