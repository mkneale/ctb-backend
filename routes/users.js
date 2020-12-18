var express = require('express');
var router = express.Router();


var usersController = require('../controllers/users');

router.post('/new', usersController.Create);
router.post('/login', usersController.Login);
router.post('/exist', usersController.Exist);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
