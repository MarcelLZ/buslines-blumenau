'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _LineController = require('../controller/LineController');

var _LineController2 = _interopRequireDefault(_LineController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var lineController = new _LineController2.default();

router.get('/', lineController.getAll.bind(lineController));

exports.default = router;