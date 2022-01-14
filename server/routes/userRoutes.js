const express = require('express')
const userService = require('../services/userServices')
const router = express.Router();


router.post('/add',userService.add)
router.get('/view',userService.view)
router.put('/edit',userService.edit)
router.delete('/delete',userService.delete)

module.exports = router