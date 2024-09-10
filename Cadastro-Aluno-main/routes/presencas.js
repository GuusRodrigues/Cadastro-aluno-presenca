const express = require('express');
const router = express.Router();
const PresencaController = require('../controllers/presencaController');

router.get('/', PresencaController.getPresencas);
router.post('/', PresencaController.createPresenca);
router.put('/:id', PresencaController.updatePresenca);
router.delete('/:id', PresencaController.deletePresenca);

module.exports = router;
