const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');
// const withAuth = require('../../utils/auth');

// get route for user dashboard
router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{model: User},{ model: Comment }],
    });
    if (!blogData) {
      res.status(404),json({ message: 'No blogpost with that id.'})
      return
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post route for adding new blogpot (taken back to updated dashboard)
router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create(req.body);
    res.status(200).json(blogData);
  } catch(err) {
    res.status(400).json(err)
  }
});

// put route for modifying blogpost (taken back to updated dashboard)

// delete route for deleting blogpost (taken back to updated dashboard)

// post route to allow user to comment on particular blogpost
// router.post('/:id', async (req, res) => {
//   try {
//     const commentData = Comment.create(req.body);
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(400).json(err)
//   }
// })


module.exports = router;
