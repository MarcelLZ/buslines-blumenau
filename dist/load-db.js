'use strict';

var _LinesSpider = require('./service/LinesSpider');

var _LinesSpider2 = _interopRequireDefault(_LinesSpider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function execute() {
	await new _LinesSpider2.default().execute();
}

execute();