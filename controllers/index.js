const router = require('express.js').Router();

const apiRoutes = require('/api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/', apiRoutes);

module.exports = router;