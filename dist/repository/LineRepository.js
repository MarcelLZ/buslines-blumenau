'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineRepository = function () {
	function LineRepository() {
		_classCallCheck(this, LineRepository);

		this._collection = _db2.default.getCollection('lines');
	}

	/**
  * 
  * @param {Array<Line>|Line} data 
  */


	_createClass(LineRepository, [{
		key: 'save',
		value: function save(data) {
			this._collection.insert(data);
			_db2.default.saveDatabase();
		}
	}, {
		key: 'findAll',
		value: function findAll() {
			this._collection = _db2.default.getCollection('lines');
			return this._collection.find().map(function (line) {
				return { name: line.name, number: line.number };
			});
		}
	}]);

	return LineRepository;
}();

exports.default = LineRepository;