'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineSchema = _db2.default.model('line', {
	name: String,
	number: Number,
	pageLink: String
});

exports.default = LineSchema;