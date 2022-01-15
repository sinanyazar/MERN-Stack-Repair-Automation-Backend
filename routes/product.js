const router = require('express').Router();
const productController = require('../controllers/product');

router.get('/', productController.list);
router.get('/:productId', productController.get);
router.post('/save', productController.save);
router.post('/delete', productController.delete)

module.exports = router;