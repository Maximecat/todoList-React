class Todo {
    id;
    todo;
    completed;
    userId;
    isDeleted;
    deletedOn;

    constructor(toDoElement) {
        this.id = toDoElement.id;
        this.todo = toDoElement.todo;
        this.completed = toDoElement.completed;
        this.userId = toDoElement.userId;
        this.isDeleted = toDoElement.isDeleted;
        this.deletedOn = new Date(toDoElement.deletedOn)
    }
}

export default Todo