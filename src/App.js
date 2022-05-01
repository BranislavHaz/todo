import { BrowserRouter as Router } from "react-router-dom";
import AddTodoCategory from "./components/AddTodoCategory";
import AddTodoItem from "./components/AddTodoItem";
//import TodoList from "./components/TodoList";
import Layout from "./layout/Layout";
import Dashboard from "./layout/Dashboard";
import Navbar from "./layout/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
        <h1>Hello</h1>
        <AddTodoCategory />
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
