
const Session = require('./session.model');

class SessionController {
  static* getSessions(next) {
    try {
      this.body = yield Session.find({}).exec();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* getSession(next) {
    try {
      this.body = yield Session.find({ _id: this.params.id }).exec();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* create(next) {
    try {
      const newSession = new Session(this.request.body);
      this.status = 201;
      this.body = yield newSession.save();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* update(next) {
    try {
      this.status = 204;
      yield Session.findByIdAndUpdate({ _id: this.params.id }, this.request.body).exec();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* remove(next) {
    try {
      this.status = 200;
      yield Session.findByIdAndRemove({ _id: this.params.id }).exec();
    } catch (e) {
      this.status = 500;
      console.error(3);
    } finally {
      yield next;
    }
  }
}

module.exports = SessionController;
