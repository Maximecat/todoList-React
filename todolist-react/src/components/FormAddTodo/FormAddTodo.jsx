import './FormAddTodo.css'

function FormAddTodo() {
    return (
        <form id="form-todo" className="add-todo-card">
            <input type="text" className="input-add-todo" placeholder="Add a task..." />
            <button className="button-add-todo" type="submit">Save</button>
        </form>
    )
}

export default FormAddTodo