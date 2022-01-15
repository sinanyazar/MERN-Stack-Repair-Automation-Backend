const router = require('express').Router();
const customerController = require('../controllers/customer');

router.get('/', customerController.list);
router.get('/:customerId', customerController.get);
router.post('/save', customerController.save);
router.post('/delete', customerController.delete)

module.exports = router;