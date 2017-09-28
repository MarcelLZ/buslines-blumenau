import mongoose from 'mongoose';
import bluebird from 'bluebird';
import config from '../config';

mongoose.Promise = bluebird;

const _connection = (variables) => {
	const username = variables.MONGO_USERNAME || config.mongo.username,
		password = variables.MONGO_PASSWORD || config.mongo.password,
		host = variables.MONGO_HOST || config.mongo.host,
		port = variables.MONGO_PORT || config.mongo.port,
		database = variables.MONGO_DATABASE || config.mongo.database,
		auth = username ? `${username}:${password}@` : '';

	return `mongodb://${auth}${host}:${port}/${database}`;
};
const _urlConnection = _connection(process.env);

console.log(_urlConnection);
mongoose.connect(_urlConnection, {
	useMongoClient: true,
	promiseLibrary: bluebird
});


const db = mongoose.connection;

db.on('error', () => console.log(`Erro ao tentar conectar no MongoDB - Endereço : ${_urlConnection}`));

db.once('open', () => console.log(`MongoDB conectado com sucesso - Endereço : ${_urlConnection}`));

export default mongoose;