import LineRepository from '../repository/LineRepository';
import HttpStatus from 'http-status';
import db from '../db';

export default class LineController {

	constructor() {
		this._repository = new LineRepository();
	}

	getAll(request, response) {
		let lines = this._repository.findAll();
		response.json(lines);
		response.status(HttpStatus.OK);
	}
}