module.exports.tasks = function(application, req, res) {
    taskDAO = new application.app.models.TaskDAO(req.session.tasks);

    if((taskDAO.tasks === undefined) || (taskDAO.tasks.length == 0)) {
        res.render('index', {tasks: {}, notSolved: {}});
        return;
    }

    for(var i = 0; i < taskDAO.getTasks().length; i++) {
        if(taskDAO.getTasks()[i].status == 'Em Andamento') {
            res.render('index', {tasks: taskDAO.getTasks(), notSolved: true});
            return;
        }
    }
   
    res.render('index', {tasks: taskDAO.getTasks(), notSolved: false});
    return;
}

module.exports.addTask = function(application, req, res) {
    taskDAO = new application.app.models.TaskDAO(req.session.tasks);
    
    var dadosForm = req.body;
    var nome = dadosForm.nome;
    var quantidade = dadosForm.quantidade;
    var status = 'Em Andamento';

    var task = new application.app.models.domain.Task(nome, quantidade, status);

    req.session.tasks = taskDAO.addTask(task);

    res.redirect('/');
    return;
}

module.exports.removerTask = function(application, req, res) {
    taskDAO = new application.app.models.TaskDAO(req.session.tasks);

    var parametros_url = req.query;
    var id_task = parametros_url.id_task;

    req.session.tasks = taskDAO.removeTask(id_task);

    res.redirect('/');
    return;
}

module.exports.solvedTask = function(application, req, res) {
    taskDAO = new application.app.models.TaskDAO(req.session.tasks);

    var parametros_url = req.query;
    var id_solved_task = parametros_url.id_solved_task;
    var tasks = taskDAO.getTasks();
    var taskUpdate = tasks[id_solved_task];
    taskUpdate.status = 'Concluido';

    req.session.tasks = taskDAO.removeTask(id_solved_task);
    req.session.tasks = taskDAO.addTask(taskUpdate);

    res.redirect('/');    
    return;
}

module.exports.newList = function(application, req, res) {
    req.session.tasks = [];

    res.redirect('/');    
    return;
}