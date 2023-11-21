import { useEffect, useState } from 'react'
import ApiService from '../../utils/services/ApiService'
import './TodoCard.css'

function TodoCard({ task, id, checked }) {
    const [completed, setCompleted] = useState(checked)
    const datasService = new ApiService()

    const deleteTodo = () => {
        console.log(id);
        datasService.deleteTodoElement(id)
            .then(todo => console.log(todo))
    }

    const updateTodo = () => {
        // if (checked === true) {
        //     setCompleted(false)
        // } else {
        //     setCompleted(true)
        // }
        setCompleted(!completed)
    }

    useEffect(() => {
        datasService.updateTodoElement(id, completed)
            .then(todo => console.log(todo))
    }, [id, datasService, completed])

    return (
        <article id={id} className='todo-card'>
            <input type="checkbox" className='todo-checkbox' checked={completed} onClick={updateTodo} />
            <p className='todo-paragraph'>{task}</p>
            <button className='todo-remove' onClick={deleteTodo}>Remove</button>
        </article>
    )
}

export default TodoCard