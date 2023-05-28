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

    // Serialize data so the template can read it

    // Pass serialized data and session flag into template

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post route to allow user to comment on particular blogpost

// signed out, nav links go to login page



module.exports = router;