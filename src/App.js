import AddListForm from "./components/AddListForm";
import AddToDoForm from "./components/AddToDoForm";
import ToDoWall from "./layout/ToDoWall";
import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello</h1>
        <AddListForm />
        <ToDoWall />
        <AddToDoForm />
      </div>
    </Provider>
  );
}

export default App;
