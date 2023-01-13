import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Sidebar />
    </div>
  );
}

export default App;
