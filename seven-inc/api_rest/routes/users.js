var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', controller.getAllFunc);
router.get('/:id', controller.getFuncById);
router.post('/', controller.addFunc)
router.put('/:id', controller.editFunc);
router.delete('/:id', controller.deleteFunc);

module.exports = router;
