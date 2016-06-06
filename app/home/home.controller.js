
class HomeController {
  static* get(next) {
    try {
      this.body = 'Welcome to Traccon!';
    } catch (e) {
      this.status = 500;
      console.error(e);
    } finally {
      yield next;
    }
  }
}

module.exports = HomeController;
