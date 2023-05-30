const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

// get route to see all blogposts
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // handlebars to display blogposts
    const blogposts = blogData.map((blogpost) => blogpost.get({ plain: true }));

    res.render('homepage', { 
      blogposts, 
      logged_in: req.session.logged_in 
    });

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// signed out, nav links go to login page (handlebars)
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});


module.exports = router;