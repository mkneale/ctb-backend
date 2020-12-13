var express = require('express');
var router = express.Router();

var totalsController = require('../controllers/totals');

router.get('/', totalsController.Index);
router.get('/:userId', totalsController.Find);

module.exports = router;