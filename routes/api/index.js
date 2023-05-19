const router = require('express');
const userRoutes = require('./user-routes');
const thoughRoutes = require('./thought-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughRoutes);

module.exports = router;