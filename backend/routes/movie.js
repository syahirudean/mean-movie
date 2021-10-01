const express = require('express');
const movieController = require('../controllers/movie');

const router = express.Router();

router.get('/', movieController.getAllMovies);

router.post('/', movieController.postMovie);

router.put('/', movieController.putMovie);

//  PARAMETER ROUTE 
router.delete('/:id', movieController.deleteMovie);

module.exports = router;