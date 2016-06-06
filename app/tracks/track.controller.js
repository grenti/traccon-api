
const Track = require('./track.model.js');

class TrackController {
  static* getTracks(next) {
    try {
      this.body = yield Track.find({}).exec();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* getTrack(next) {
    try {
      this.body = yield Track.find({ _id: this.params.id }).exec();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* create(next) {
    try {
      const newTrack = new Track(this.request.body);
      this.status = 201;
      this.body = yield newTrack.save();
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
      yield Track.findByIdAndUpdate(
        { _id: this.params.id },
        this.request.body).exec();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }

  static* remove(next) {
    try {
      this.status = 204;
      yield Track.findByIdAndRemove({ _id: this.params.id }).exec();
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }
}

module.exports = TrackController;
