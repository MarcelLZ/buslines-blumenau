import Loki from 'lokijs';
const db = new Loki('./database.json', {
	autoload: true
	// autosave: true,
	// autosaveInterval: 10000
});

db.addCollection('lines');

export default db;