'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsdom = require('jsdom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var features = {
	FetchExternalResources: ['script'],
	ProcessExternalResources: ['script'],
	SkipExternalResources: false
};

var Spider = function () {
	function Spider(url) {
		_classCallCheck(this, Spider);

		this._jsdom = _jsdom.JSDOM;
		this._url = url;
	}

	_createClass(Spider, [{
		key: 'executeCrawler',
		value: function executeCrawler() {
			var dom;
			return regeneratorRuntime.async(function executeCrawler$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return regeneratorRuntime.awrap(_jsdom.JSDOM.fromURL(this._url, { features: features }));

						case 3:
							dom = _context.sent;
							return _context.abrupt('return', dom);

						case 7:
							_context.prev = 7;
							_context.t0 = _context['catch'](0);

							//TODO: Implement a better logger
							console.error('Error in crawler at the page ' + this._url + ' : Error - ' + _context.t0);

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, null, this, [[0, 7]]);
		}
	}]);

	return Spider;
}();

exports.default = Spider;