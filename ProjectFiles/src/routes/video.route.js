const express = require('express');
const router = express.Router();

const video_controller = require('../controllers/video.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', video_controller.test);

router.post('/create', video_controller.video_create);
router.get('/:id', video_controller.video_details);
router.put('/:id/update', video_controller.video_update);
router.delete('/:id/delete', video_controller.video_delete);

module.exports = router;