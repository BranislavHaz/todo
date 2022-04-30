import AddListForm from "./components/AddListForm";
import ToDoList from "./components/ToDoList";
import AddToDoForm from "./components/AddToDoForm";
import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello</h1>
        <AddListForm />
        <ToDoList />
        <AddToDoForm />
      </div>
    </Provider>
  );
}

export default App;
