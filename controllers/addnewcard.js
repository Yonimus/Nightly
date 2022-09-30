const router = require('express').Router();

router.get('/add', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('addnewmood');
});

module.exports = router;
