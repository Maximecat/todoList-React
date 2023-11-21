import './App.css';
import Header from '../components/Header/Header';
import FormAddTodo from '../components/FormAddTodo/FormAddTodo';
import TodoCard from '../components/TodoCard/TodoCard';
import ApiService from '../utils/services/ApiService'
import { useEffect, useState } from 'react';

function App() {
  //
  const [todos, setTodos] = useState([]);
  const datasService = new ApiService()

  useEffect(() => {
    datasService.getTodoList()
      .then(todosRes => {
        console.log(todosRes);
        setTodos(todosRes)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <main id='main'>
        <FormAddTodo />
        {
          todos.map(todo => <TodoCard task={todo.todo} id={todo.id} checked={todo.completed} />)
        }
      </main>
    </div>
  );
}

export default App;
