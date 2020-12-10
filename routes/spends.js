var express = require('express');
var router = express.Router();


var SpendsController = require('../controllers/spends');
router.get('/', SpendsController.Index);
router.post('/', SpendsController.New);
router.delete('/:spendId', SpendsController.Delete);
router.patch('/:spendId', SpendsController.Patch);
module.exports = router;
