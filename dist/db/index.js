'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lokijs = require('lokijs');

var _lokijs2 = _interopRequireDefault(_lokijs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _lokijs2.default('./database.json', {
	// autosave: true,
	// autoload: true
});

exports.default = db;