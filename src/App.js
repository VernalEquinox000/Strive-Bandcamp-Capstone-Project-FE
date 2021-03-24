import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Jumbo from "./components/Jumbo";
import Selling from "./components/Selling";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Jumbo />
      <Selling />
    </div>
  );
}

export default App;
