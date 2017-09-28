'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.listen(_app2.default.get('PORT'), function () {
  return console.log('Iniciado');
});