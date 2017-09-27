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
		value: async function executeCrawler() {
			try {
				var dom = await _jsdom.JSDOM.fromURL(this._url, { features: features });
				return dom;
			} catch (err) {
				//TODO: Implement a better logger
				console.error('Error in crawler at the page ' + this._url + ' : Error - ' + err);
			}
		}
	}]);

	return Spider;
}();

exports.default = Spider;