import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {

  // const [todos, setTodos] = useState([]);

  // fetch('http://localhost:3000/todos')
  // .then(async function(response){
  //   const data = await response.json();
  //   setTodos(data.todos);
  // })


  return (
    <div className='container'>
      < CreateTodo />
      <div>
      < Todos />
      </div>
      </div>
  )
}

export default App