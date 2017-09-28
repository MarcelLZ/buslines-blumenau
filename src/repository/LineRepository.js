import LineSchema from '../schema/LineSchema';

export default class LineRepository {

	constructor() {
		this._collection = LineSchema;
	}

	/**
	 * 
	 * @param {Array<Line>|Line} lines 
	 */
	async save(lines) {
		await this._collection.insertMany(lines);
	}

	async findAll() {
		let lines = await this._collection.find();
		return lines;
	}

}