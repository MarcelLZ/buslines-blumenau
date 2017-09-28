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
		value: function execute() {
			return regeneratorRuntime.async(function execute$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return regeneratorRuntime.awrap(this._spider.executeCrawler());

						case 2:
							this._dom = _context.sent;

							this._document = this._dom.window.document;
							this.findPages();
							this.getLinesOfPage();
							this.getAnotherLines();
							console.log('Finished');

						case 8:
						case 'end':
							return _context.stop();
					}
				}
			}, null, this);
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
		value: function getAnotherLines() {
			var _this = this;

			return regeneratorRuntime.async(function getAnotherLines$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							this._pages.forEach(function _callee(page) {
								var spider;
								return regeneratorRuntime.async(function _callee$(_context2) {
									while (1) {
										switch (_context2.prev = _context2.next) {
											case 0:
												spider = new _Spider2.default(page);

												spider.executeCrawler().then(function (dom) {
													_this.getLinesOfPage(dom.window.document);
												});

											case 2:
											case 'end':
												return _context2.stop();
										}
									}
								}, null, _this);
							});

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, null, this);
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
			var lines;
			return regeneratorRuntime.async(function saveLines$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							lines = Array.from(htmlLines).map(function (line) {
								var number = line.querySelector(LINE_NUMBER_SELECTOR).innerHTML;
								var name = line.querySelector(LINE_TITLE_SELECTOR).innerHTML;

								return new _Line2.default(name, number, line.href);
							});
							_context4.next = 3;
							return regeneratorRuntime.awrap(this._repository.save(lines));

						case 3:
						case 'end':
							return _context4.stop();
					}
				}
			}, null, this);
		}
	}]);

	return LinesSpider;
}();

exports.default = LinesSpider;