const express = require('express');
const { body } = require('express-validator');
const moviesController = require('./../controllers/movie');
const auth = require('./../middleware/auth');

const router = express.Router();

router.get('/', moviesController.fetchAll);

router.post(
  '/',
  [
    auth,
    body('imgURL').not().isEmpty(),
    body('title').not().isEmpty(),
    body('description').not().isEmpty(),
    body('director').not().isEmpty(),
    body('casts').not().isEmpty(),
    body('release_date').not().isEmpty().isNumeric(),
    body('rating').not().isEmpty().isNumeric(),
    body('date_created').not().isEmpty().isNumeric(),
  ],
  moviesController.postMovie
);

//  PARAMETER ROUTE
router.delete('/:id', auth, moviesController.deleteMovie);

module.exports = router;
