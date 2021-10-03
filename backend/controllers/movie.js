// const Movie = require('../models/movie');

// exports.getAllMovies = async (req, res, next) => {
//   // ATTEMPT TO RETRIVE DATA
//   try {
//     const [allMovies] = await Movie.fetchAll();
//     res.status(200).json(allMovies);
//   } catch (err) {
//     // PROMPT ERROR FROM ERROR MIDDLEWARE
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// exports.postMovie = async (req, res, next) => {
//   // ATTEMPT TO POST DATA
//   try {
//     const postResponse = await Movie.post(req.body.item);
//     res.status(201).json(postResponse);
//   } catch (err) {
//     // PROMPT ERROR FROM ERROR MIDDLEWARE
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

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

// exports.deleteMovie = async (req, res, next) => {
//   try {
//     const deleteResponse = await Movie.delete(req.params.id);
//     res.status(200).json(deleteResponse);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };
