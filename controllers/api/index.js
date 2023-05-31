const router = require('express').Router();
const userRoutes = require('./user-routes');
const dashboardRoutes = require('./dashboard-routes');
const blogRoutes = require('./blog-routes')

router.use('/dashboard', dashboardRoutes);
router.use('/users', userRoutes);
router.use('/blog', blogRoutes)

module.exports = router;