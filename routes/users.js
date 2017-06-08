var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let templateVars = {
    urls: urlsForUserId(req.urlDB);
  res.send('respond with a resource');
});

router.get('/new', function(req, res) {
  // /urls/new
});

module.exports = router;
