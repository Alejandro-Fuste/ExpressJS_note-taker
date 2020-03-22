// ===============================================================================
// LOAD DATA
// We are linking our routes to a "data" source.
// ===============================================================================
const fs = require('fs');
const dbJson = require('../develop/db/db');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get('/api/notes', (req, res) => {
		res.json(dbJson);
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// ---------------------------------------------------------------------------

	app.post('/api/notes', (req, res) => {
		// Write user input to db.json
		// req.body is available since we're using the body parsing middleware
		// let data = req.body;
		dbJson.push(req.body);
		// console.log(req.body);
		fs.writeFile('./develop/db/db.json', JSON.stringify(dbJson), (err, data) => {
			if (err) throw err;
			else res.json(data);
		});
	});

	// ---------------------------------------------------------------------------
	//
	// Delete method

	app.delete('/api/notes/:id', function(req, res) {
		//
	});
};