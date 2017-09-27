import db from '../db';

export default class LineRepository {

	constructor() {
		this._collection = db.addCollection('lines');
	}

	/**
	 * 
	 * @param {Array<Line>|Line} data 
	 */
	save(data) {
		this._collection.insert(data);
		db.saveDatabase();
	}

}