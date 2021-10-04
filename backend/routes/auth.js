
const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/auth');

const router = express.Router();

const User = require('./../models/user');

router.post(
  '/signup',
  [
    body('admin').not().isEmpty(),
    body('email')
      .isEmail()
      .withMessage('Please enter valid email.')
      .custom(async (email) => {
        const user = await User.find(email);
        if (user[0].length > 0) {
          return Promise.reject('Email address already exist!');
        }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 7 }),
  ],
  authController.signup
);

router.post('/login', authController.login);

module.exports = router;
