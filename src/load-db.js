import LinesSpider from './service/LinesSpider';

async function execute() {
	await new LinesSpider().execute();
}

execute();