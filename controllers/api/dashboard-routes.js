const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get route for user dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
      // include: [{
      //   model: User, 
      //   attributes: ['name'],
      // },{
      //   model: Comment,
      //   attributes: ['text', 'date_created','user_id']
      // }]
    });
    if (!blogData) {
      res.status(404),json({ message: 'No blogpost with that id.'})
      return
    }

    res.status(200).json(blogData)

    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{
        model: User, 
        attributes: ['name'],
      },{
        model: Comment,
        attributes: ['text', 'date_created','user_id']
      }]
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
router.put('/:id', async (req, res) => {
  const updateBlog = await Blog.update (
    {
      tag_name: req.body.blog_title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.json(updateBlog);
});

// delete route for deleting blogpost (taken back to updated dashboard)
router.delete('/:id', withAuth, async (req, res) => {
  const deleteBlog = await Blog.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    }
  });

  
  if (!projectData) {
    res.status(404).json({ message: 'No project found with this id!' });
    return;
  }

  res.json(deleteBlog)
});


module.exports = router;
