class TaskDAO {

    constructor(tasks) {
        if (tasks === undefined) {
            this.tasks = [];
            return;
        } else {
            this.tasks = tasks;
        }
    }

    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task);
        return this.tasks;
    }

    updateTask(task) {
        return;
    }

    removeTask(task) {
        this.tasks.splice(task, 1);
        return this.tasks;
    }

}

module.exports = function () {
    return TaskDAO;
}