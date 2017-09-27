'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lines = require('./lines');

var _lines2 = _interopRequireDefault(_lines);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/lines', _lines2.default);

exports.default = router;