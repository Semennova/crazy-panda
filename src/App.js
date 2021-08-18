import './App.css';
import { TodoList } from './Components/TodoList/TodoList';
import { GlobalProvider } from './Context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
        <div className="App">
          <TodoList />
        </div>
    </GlobalProvider>
  );
}

export default App;
