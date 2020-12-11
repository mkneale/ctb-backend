var express = require('express');
var router = express.Router();


var usersController = require('../controllers/users');

router.post('/', usersController.Create);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
