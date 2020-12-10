var express = require('express');
var router = express.Router();


var SpendsController = require('../controllers/spends');
router.get('/', SpendsController.Index);
router.post('/', SpendsController.New);
router.delete('/:spendId', SpendsController.Delete);
module.exports = router;
