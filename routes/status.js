const router = require('express').Router();
const statusController = require('../controllers/status');

router.get('/', statusController.list);
router.get('/:statusId', statusController.get);
router.post('/save', statusController.save);
router.post('/delete', statusController.delete)

module.exports = router;