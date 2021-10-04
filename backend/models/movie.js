// DATA RELATION
const db = require('../util/database');

module.exports = class Movie {
  constructor(
    imgURL,
    title,
    description,
    director,
    casts,
    release_date,
    rating,
    date_created
  ) {
    this.imgURL = imgURL;
    this.title = title;
    this.description = description;
    this.director = director;
    this.casts = casts;
    this.release_date = release_date;
    this.rating = rating;
    this.date_created = date_created;
  }

  // RETRIVE TO DATABASE
  static fetchAll() {
    return db.execute('SELECT * FROM movies');
  }

  // EXECUTE TO DATABASE
  static save(movie) {
    return db.execute(
      'INSERT INTO movies (imgURL, title, description, director, casts, release_date, rating, date_created) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        movie.imgURL,
        movie.title,
        movie.description,
        movie.director,
        movie.casts,
        movie.release_date,
        movie.rating,
        movie.date_created,
      ]
    );
  }

  // UPDATE MOVIE
  static update(movie) {
    return db.execute(
      'UPDATE movies SET imgURL = ?, title = ?, description = ?, director = ?, casts = ?, release_date = ?, rating = ?, date_created = ? WHERE id = ?',
      [
        movie.imgURL,
        movie.title,
        movie.description,
        movie.director,
        movie.casts,
        movie.release_date,
        movie.rating,
        movie.date_created,
        movie.id,
      ]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM movies WHERE id = ?', [id]);
  }
};
