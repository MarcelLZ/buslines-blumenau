'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;

var _connection = function _connection(variables) {
	var username = variables.MONGO_USERNAME || _config2.default.mongo.username,
	    password = variables.MONGO_PASSWORD || _config2.default.mongo.password,
	    host = variables.MONGO_HOST || _config2.default.mongo.host,
	    port = variables.MONGO_PORT || _config2.default.mongo.port,
	    database = variables.MONGO_DATABASE || _config2.default.mongo.database,
	    auth = username ? username + ':' + password + '@' : '';

	return 'mongodb://' + auth + host + ':' + port + '/' + database;
};
var _urlConnection = _connection(process.env);

console.log(_urlConnection);
_mongoose2.default.connect(_urlConnection, {
	useMongoClient: true,
	promiseLibrary: _bluebird2.default
});

var db = _mongoose2.default.connection;

db.on('error', function () {
	return console.log('Erro ao tentar conectar no MongoDB - Endere\xE7o : ' + _urlConnection);
});

db.once('open', function () {
	return console.log('MongoDB conectado com sucesso - Endere\xE7o : ' + _urlConnection);
});

exports.default = _mongoose2.default;