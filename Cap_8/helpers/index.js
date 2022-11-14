const section = function (name, options) {
  if (!this._sections) {
    this._sections = {};
  }
  this._sections[name] = options.fn(this);
};
const test = function (name, options) {
  if (!this._test) this._test = {};
  this._test[name] = options.fn(this, "BLABLA");
};
module.exports = {
  section,
  test,
};
