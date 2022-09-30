const router = require('express').Router();

router.get('/cards', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('cardpage');
});

module.exports = router;
