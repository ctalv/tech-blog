const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// get route for user dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// post route for adding new blogpot (taken back to updated dashboard)

// put route for modifying blogpost (taken back to updated dashboard)

// delete route for deleting blogpost (taken back to updated dashboard)

// post route to allow user to comment on particular blogpost
router.post('/:id', async (req, res) => {
  try {
    const commentData = Comment.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err)
  }
})


module.exports = router;
