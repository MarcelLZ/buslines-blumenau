'use strict';

var _LinesSpider = require('./service/LinesSpider');

var _LinesSpider2 = _interopRequireDefault(_LinesSpider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function execute() {
	return regeneratorRuntime.async(function execute$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return regeneratorRuntime.awrap(new _LinesSpider2.default().execute());

				case 2:
				case 'end':
					return _context.stop();
			}
		}
	}, null, this);
}

execute();