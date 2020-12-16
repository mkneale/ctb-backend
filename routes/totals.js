var express = require('express');
var router = express.Router();

var totalsController = require('../controllers/totals');

router.get('/', totalsController.Index);
router.get('/:userId', totalsController.Find);
router.post('/salary/:userId', totalsController.PostSalary);
router.get('/salary/:userId', totalsController.GetSalary);
router.patch('/salary/:userId', totalsController.PatchSalary);

module.exports = router;
