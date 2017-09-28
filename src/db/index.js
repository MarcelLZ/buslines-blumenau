import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.connect('mongodb://localhost/buslines', {
	useMongoClient: true,
	promiseLibrary: bluebird
});

mongoose.Promise = bluebird;

const db = mongoose.connection;

db.on('error', () => console.log('Erro ao tentar conectar ao mongodb.'));
db.once('open', () => console.log('Conectado ao mongodb'));

export default mongoose;