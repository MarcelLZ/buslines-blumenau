//@ts-check
import Spider from '../models/Spider';
import LineRepository from '../repository/LineRepository';
import Line from '../models/Line';

const LINE_SELECTOR = '.line-item a';
const PAGINATION_SELECTOR = '.pagination-link';
const LINE_NUMBER_SELECTOR = '.line-number';
const LINE_TITLE_SELECTOR = '.line-title';

export default class LinesSpider {

	constructor() {
		this._spider = new Spider('https://moovitapp.com/index/pt-br/transporte_publico-lines-Blumenau-1-2400-850008');
		this._repository = new LineRepository();
	}

	async execute() {
		this._dom = await this._spider.executeCrawler();
		this._document = this._dom.window.document;
		this.findPages();
		this.getLinesOfPage();
		this.getAnotherLines();
		console.log('Finished');
	}

	findPages() {
		let pages = this._document.querySelectorAll(PAGINATION_SELECTOR);
		this._pages = Array.from(pages).map(page => {
			return page.href;
		});
	}

	async getAnotherLines() {
		this._pages.forEach(async page => {
			const spider = new Spider(page);
			spider.executeCrawler()
				.then(dom => {
					this.getLinesOfPage(dom.window.document);
				})
		});
	}

	getLinesOfPage(document) {
		let lines;

		if (document) lines = document.querySelectorAll(LINE_SELECTOR);
		else lines = this._document.querySelectorAll(LINE_SELECTOR);

		this.saveLines(lines);
	}

	/**
	 * 
	 * @param {Array<Object>} htmlLines 
	 */
	async saveLines(htmlLines) {
		const lines = Array.from(htmlLines).map(line => {
			let number = line.querySelector(LINE_NUMBER_SELECTOR).innerHTML;
			let name = line.querySelector(LINE_TITLE_SELECTOR).innerHTML;
			
			return new Line(name, number, line.href);
		});
		await this._repository.save(lines);
	}

}