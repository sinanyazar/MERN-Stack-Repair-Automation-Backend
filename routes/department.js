const router = require('express').Router();
const departmentController = require('../controllers/department');

router.get('/', departmentController.list);
router.get('/:departmentId', departmentController.get);
router.post('/save', departmentController.save);
router.post('/delete', departmentController.delete)

module.exports = router;