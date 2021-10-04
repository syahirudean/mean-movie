const { validationResult } = require('express-validator');

const Movie = require('../models/movie');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allMovies] = await Movie.fetchAll();
    res.status(200).json(allMovies);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postMovie = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const imgURL = req.body.imgURL;
  const title = req.body.title;
  const description = req.body.description;
  const director = req.body.director;
  const casts = req.body.casts;
  const release_date = req.body.release_date;
  const rating = req.body.rating;
  const date_created = req.body.date_created;

  try {
    const movie = {
      imgURL: imgURL,
      title: title,
      description: description,
      director: director,
      casts: casts,
      release_date: release_date,
      rating: rating,
      date_created: date_created,
    };
    const result = await Movie.save(movie);
    res.status(201).json({ message: 'Success!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// exports.putMovie = async (req, res, next) => {
//   try {
//     const putResponse = await Movie.update(req.body.id, req.body.item);
//     res.status(200).json(putResponse);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

exports.deleteMovie = async (req, res, next) => {
  try {
    const deleteResponse = await Movie.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
