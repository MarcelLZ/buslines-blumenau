import db from '../db';

export default class LineRepository {

	constructor() {
		this._collection = db.getCollection('lines');
	}

	/**
	 * 
	 * @param {Array<Line>|Line} data 
	 */
	save(data) {
		this._collection.insert(data);
		db.saveDatabase();
	}

	findAll() {
		this._collection = db.getCollection('lines');
		return this._collection.find().map(line => ( {name:line.name,number:line.number} ));
	}

}