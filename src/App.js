import AddTodoList from "./components/AddTodoList";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <AddTodoList />
      <TodoList />
      <AddTodoItem />
    </div>
  );
}

export default App;
