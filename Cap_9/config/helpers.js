const section = function (name, options) {
  if (!this._sections) {
    this._sections = {};
  }
  this._sections[name] = options.fn(this);
};

module.exports = {
  section,
};
