const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/', userController.list);
router.get('/:userId', userController.get);
router.post('/save', userController.save);

module.exports = router;