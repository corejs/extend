var dictionary = require('dictionary');

var extend = module.exports = function (obj, mixins) {
  var Constructor = function () {};
  Constructor.prototype = obj;
  mixins.forEach(function (mixin) {
    dictionary(mixin).each(function (value, key) {
      Constructor.prototype[key] = value;
    });
  });
  return new Constructor();
};
