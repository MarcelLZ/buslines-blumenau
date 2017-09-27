'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LineRepository = require('../repository/LineRepository');

var _LineRepository2 = _interopRequireDefault(_LineRepository);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineController = function () {
	function LineController() {
		_classCallCheck(this, LineController);

		this._repository = new _LineRepository2.default();
	}

	_createClass(LineController, [{
		key: 'getAll',
		value: function getAll(request, response) {
			var lines;
			return regeneratorRuntime.async(function getAll$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							lines = this._repository.findAll();

							response.json(lines);
							response.status(_httpStatus2.default.OK);

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, null, this);
		}
	}]);

	return LineController;
}();

exports.default = LineController;