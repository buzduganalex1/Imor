const express = require('express');
const router = express.Router();

const image_controller = require('../controllers/image.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', image_controller.test);

router.post('/create', image_controller.image_create);
router.get('/:id', image_controller.image_details);
router.put('/:id/update', image_controller.image_update);
router.delete('/:id/delete', image_controller.image_delete);

module.exports = router;