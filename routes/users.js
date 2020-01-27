const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')

const usersController = require('../controllers/users')


router.get('/', usersController.listUser)

router.get('/:id', usersController.showUser)

router.post('/', usersController.createUser)

router.put('/:id', usersController.updateUser)

router.delete('/:id', usersController.deleteUser)

module.exports = router