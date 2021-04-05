import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import ModalIntro from "./components/ModalIntro";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Router>
        <NavigationBar handleShow={handleShow} />
        <ModalIntro show={show} handleClose={handleClose} />
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
