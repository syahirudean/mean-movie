// const express = require('express');

// const { body } = require('express-validator');

// const router = express.Router();

// const User = require('../models/user');

// const authController = require('../controllers/auth');

// router.post(
//   '/signup',
//   [
//     body('email')
//       .isEmail()
//       .withMessage('Please enter a valid email.')
//       .custom(async (email) => {
//         const user = await User.find(email);
//         if (user[0].length > 0) {
//           return Promise.reject('Email address already exist!');
//         }
//       })
//       .normalizeEmail(),
//     body('password').trim().isLength({ min: 7 }),
//     body('admin').not().isEmpty(),
//   ],
//   authController.signup
// );

// // router.post('/login', authController.login);

// module.exports = router;


// PART 2
const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const authController = require('../controllers/auth');

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

module.exports = router;
