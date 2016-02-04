'use strict';

var path = process.cwd();

module.exports = function (app) {

	app.route('/').get(function(request, response){
		response.sendFile(process.cwd() + '/public/index.html');
	})
};
