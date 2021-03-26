import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Jumbo from "./components/Jumbo";
import Selling from "./components/Selling";
import ModalIntro from "./components/ModalIntro";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <NavigationBar handleShow={handleShow} />
      <ModalIntro show={show} handleClose={handleClose} />
      <Jumbo />
      <Selling />
    </div>
  );
}

export default App;
