'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //@ts-check


var _Spider = require('../models/Spider');

var _Spider2 = _interopRequireDefault(_Spider);

var _LineRepository = require('../repository/LineRepository');

var _LineRepository2 = _interopRequireDefault(_LineRepository);

var _Line = require('../models/Line');

var _Line2 = _interopRequireDefault(_Line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LINE_SELECTOR = '.line-item a';
var PAGINATION_SELECTOR = '.pagination-link';
var LINE_NUMBER_SELECTOR = '.line-number';
var LINE_TITLE_SELECTOR = '.line-title';

var LinesSpider = function () {
	function LinesSpider() {
		_classCallCheck(this, LinesSpider);

		this._spider = new _Spider2.default('https://moovitapp.com/index/pt-br/transporte_publico-lines-Blumenau-1-2400-850008');
		this._repository = new _LineRepository2.default();
	}

	_createClass(LinesSpider, [{
		key: 'execute',
		value: async function execute() {
			console.log('exec...');
			this._dom = await this._spider.executeCrawler();
			this._document = this._dom.window.document;
			this.findPages();
			this.getLinesOfPage();
			this.getAnotherLines();
		}
	}, {
		key: 'findPages',
		value: function findPages() {
			var pages = this._document.querySelectorAll(PAGINATION_SELECTOR);
			this._pages = Array.from(pages).map(function (page) {
				return page.href;
			});
		}
	}, {
		key: 'getAnotherLines',
		value: async function getAnotherLines() {
			var _this = this;

			this._pages.forEach(async function (page) {
				var spider = new _Spider2.default(page);
				spider.executeCrawler().then(function (dom) {
					_this.getLinesOfPage(dom.window.document);
				});
			});
		}
	}, {
		key: 'getLinesOfPage',
		value: function getLinesOfPage(document) {
			var lines = void 0;

			if (document) lines = document.querySelectorAll(LINE_SELECTOR);else lines = this._document.querySelectorAll(LINE_SELECTOR);

			this.saveLines(lines);
		}

		/**
   * 
   * @param {Array<Object>} htmlLines 
   */

	}, {
		key: 'saveLines',
		value: function saveLines(htmlLines) {
			var lines = Array.from(htmlLines).map(function (line) {
				var number = line.querySelector(LINE_NUMBER_SELECTOR).innerHTML;
				var name = line.querySelector(LINE_TITLE_SELECTOR).innerHTML;

				return new _Line2.default(name, number, line.href);
			});
			this._repository.save(lines);
		}
	}]);

	return LinesSpider;
}();

exports.default = LinesSpider;