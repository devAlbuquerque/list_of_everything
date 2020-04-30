module.exports = function(application) {
	application.get('/', function(req, res) {
		application.app.controllers.task.tasks(application, req, res);
	});

	application.get('/removerTask', function(req, res) {
		application.app.controllers.task.removerTask(application, req, res);
	});

	application.get('/solvedTask', function(req, res) {
		application.app.controllers.task.solvedTask(application, req, res);
	});

	application.get('/newList', function(req, res) {
		application.app.controllers.task.newList(application, req, res);
	});
	
	application.post('/cadastrartask', function(req, res) {
		application.app.controllers.task.addTask(application, req, res);
	});	
}