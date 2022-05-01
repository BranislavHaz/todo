import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
