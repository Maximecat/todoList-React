import './App.css';
import Header from '../components/Header/Header';
import ApiService from '../utils/services/ApiService'
import FormAddTodo from '../components/FormAddTodo/FormAddTodo';
import TodoCard from '../components/TodoCard/TodoCard';

function App() {

  const datasService = new ApiService()

  return (
    <div className="App">
      <Header />
      <main id='main'>
        <FormAddTodo />
        <TodoCard task={'premier tâche'} />
        <TodoCard task={'deuxième tâche'} />
        <TodoCard task={'troisième tâche'} />
      </main>
    </div>
  );
}

export default App;
