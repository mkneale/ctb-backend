var express = require('express');
var router = express.Router();


var SpendsController = require('../controllers/spends');
router.get('/', SpendsController.Index);
router.post('/', SpendsController.New);
router.get('/:userId', SpendsController.FindbyUser);
router.delete('/:spendId', SpendsController.Delete);
router.patch('/:spendId', SpendsController.Patch);
router.get('/:spendId', SpendsController.Find);
module.exports = router;
