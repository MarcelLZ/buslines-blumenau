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

var LinesSpider = function () {
	function LinesSpider() {
		_classCallCheck(this, LinesSpider);

		this._spider = new _Spider2.default('https://moovitapp.com/index/pt-br/transporte_publico-lines-Blumenau-1-2400-850008');
		this._repository = new _LineRepository2.default();
		this._lineHtmlSelector = '.line-item a';
	}

	_createClass(LinesSpider, [{
		key: 'execute',
		value: async function execute() {
			this._dom = await this._spider.executeCrawler();
			this._document = this._dom.window.document;
			this.findPages();
			this.getLinesOfPage();
			this.getAnotherLines();
		}
	}, {
		key: 'findPages',
		value: function findPages() {
			var pages = this._document.querySelectorAll('.pagination-link');
			this._pages = Array.from(pages).map(function (page) {
				return page.href;
			});
		}
	}, {
		key: 'getAnotherLines',
		value: async function getAnotherLines() {
			var _this = this;

			console.log('dom');
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

			if (document) {
				lines = document.querySelectorAll(this._lineHtmlSelector);
				// console.log('here');
			} else lines = this._document.querySelectorAll(this._lineHtmlSelector);

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
				var number = line.querySelector('.line-number').innerHTML;
				var name = line.querySelector('.line-title').innerHTML;
				var pageLink = line.href;
				var newLine = new _Line2.default(name, number, pageLink);
				return newLine;
			});
			this._repository.save(lines);
		}
	}]);

	return LinesSpider;
}();

exports.default = LinesSpider;