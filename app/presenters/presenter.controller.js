
const Presenter = require('./presenter.model');

class PresenterController {
  static* getAll(next) {
    try {
      this.body = yield Presenter.find({}).exec();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* get(next) {
    try {
      this.body = yield Presenter.find({ _id: this.params.id }).exec();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* create(next) {
    try {
      const newPresenter = new Presenter(this.request.body);
      yield newPresenter.save().exec();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* update(next) {
    try {
      yield Presenter.findByIdAndUpdate({ _id: this.params.id }, this.request.body);
      this.status = 204;
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* delete(next) {
    try {
      yield Presenter.findByIdAndRemove({ _id: this.params.id }).exec();
      this.status = 200;
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }
}

module.exports = PresenterController;
