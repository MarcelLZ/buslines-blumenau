'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LineSchema = require('../schema/LineSchema');

var _LineSchema2 = _interopRequireDefault(_LineSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineRepository = function () {
	function LineRepository() {
		_classCallCheck(this, LineRepository);

		this._collection = _LineSchema2.default;
	}

	/**
  * 
  * @param {Array<Line>|Line} lines 
  */


	_createClass(LineRepository, [{
		key: 'save',
		value: function save(lines) {
			return regeneratorRuntime.async(function save$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return regeneratorRuntime.awrap(this._collection.insertMany(lines));

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, null, this);
		}
	}, {
		key: 'findAll',
		value: function findAll() {
			var lines;
			return regeneratorRuntime.async(function findAll$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return regeneratorRuntime.awrap(this._collection.find());

						case 2:
							lines = _context2.sent;
							return _context2.abrupt('return', lines);

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, null, this);
		}
	}]);

	return LineRepository;
}();

exports.default = LineRepository;