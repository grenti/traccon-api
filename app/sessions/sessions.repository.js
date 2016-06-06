const r = require('rethinkdbdash');

// let connection = null;
// r.connect({ host: 'localhost', port: 28015 }, (err, conn) => {
//   if (err) {
//     throw err;
//   }
//   connection = conn;
// });

class SessionsRepository {
  static* get(id = '') {
    try {
      return yield r.table('sessions').get(id).run();
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  static* getAll(criteria = {}) {
    try {
      return yield r.table('sessions').getAll(criteria).run();
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = SessionsRepository;
