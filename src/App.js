import "./App.css";
import Home from "./components/Home";
import DataState from "./context/DataState";

function App() {
  return (
    <DataState>
      <Home />
    </DataState>
  );
}

export default App;
