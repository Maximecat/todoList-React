import './TodoCard.css'

function TodoCard({ task }) {
    return (
        <article className='todo-card'>
            <input type="checkbox" className='todo-checkbox' />
            <p className='todo-paragraph'>{task}</p>
            <button className='todo-remove'>Remove</button>
        </article>
    )
}

export default TodoCard