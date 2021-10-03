// const db = require('../util/database');

// module.exports = class User {
//   constructor(email, password, admin) { // TODO: , admin
//     this.email = email;
//     this.password = password;
//     this.admin = admin;
//   }

//   static find(email) {
//     return db.execute('SELECT * FROM users WHERE email = ?', [email]);
//   }

//   static save(user) {
//     return db.execute('INSERT INTO users (email, password) VALUES (?, ?, ?)', [
//       user.email,
//       user.password,
//       user.admin,
//     ]);
//   }
// };
const db = require('../util/database');

module.exports = class User {
  constructor(admin, email, password) {
    this.admin = admin;
    this.email = email;
    this.password = password;
  }

  static find(email) {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO users (admin, email, password) VALUES (?, ?, ?)',
      [user.admin, user.email, user.password]
    );
  }
};
