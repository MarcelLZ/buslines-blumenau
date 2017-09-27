import {
	JSDOM
} from 'jsdom';

const features = {
	FetchExternalResources: ['script'],
	ProcessExternalResources: ['script'],
	SkipExternalResources: false
};

export default class Spider {

	constructor(url) {
		this._jsdom = JSDOM;
		this._url = url;
	}

	async executeCrawler() {
		try {
			let dom = await JSDOM.fromURL(this._url, { features });
			return dom;
		} catch (err) {
			//TODO: Implement a better logger
			console.error(`Error in crawler at the page ${this._url} : Error - ${err}`);
		}
	}
}