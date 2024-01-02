const router = require('express').Router();

const staffController = require('../controller/staffController');

router.get('/', staffController.getAllStaffs)

router.get('/:id', staffController.getStaff)

router.put('/:id', staffController.updateStaff)

router.post('/:id', staffController.deleteStaff)

module.exports = router;