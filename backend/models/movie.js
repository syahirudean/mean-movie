// DATA RELATION
const db = require('../util/database');

module.exports = class Grocery {
  constructor(
    id,
    imgURL,
    title,
    description,
    director,
    casts,
    release_date,
    rating,
    date_created
  ) {
    this.id = id;
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
  static post(item) {
    return db.execute('INSERT INTO movies (item) VALUES (?)', [item]);
  }

  // UPDATE ITEMS
  static update(id, item) {
    return db.execute('UPDATE movies SET item = ? WHERE id = ?', [item, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM movies WHERE id = ?', [id]);
  }
};
