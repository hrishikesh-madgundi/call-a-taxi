const express = require('express')
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3}).withMessage('Firstname must be atleast 3 characters long'),
    body('password').isLength({ min:6 }).withMessage('Password must be atleast 6 characters long')
],
    userController.registerUser
)

module.exports = router;