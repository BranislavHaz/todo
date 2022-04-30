import { BrowserRouter as Router } from "react-router-dom";
import AddTodoList from "./components/AddTodoList";
import AddTodoItem from "./components/AddTodoItem";
//import TodoList from "./components/TodoList";
import Dashboard from "./layout/Dashboard";
import Navbar from "./layout/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello</h1>
        <AddTodoList />
        <AddTodoItem />
        <Navbar />
        <Dashboard />
      </div>
      {/*       <Routes>
        <Route path="/todolist/:id" element={<TodoList />} />
      </Routes> */}
    </Router>
  );
}

export default App;
