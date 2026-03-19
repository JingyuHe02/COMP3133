var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// use body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// POST route
router.post('/', function(req, res) {
  console.log(req.body);
  res.send('POST received!');
});

module.exports = router;