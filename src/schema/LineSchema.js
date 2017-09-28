import mongoose from '../db';

const LineSchema = mongoose.model('line', {
	name: String,
	number: Number,
	pageLink: String
});

export default LineSchema;