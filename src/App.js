import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import SignupModal from "./components/SignupModal";
import LoginModal from "./components/LoginModal";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FanSetup from "./components/FanSetup";
import ArtistDash from "./components/ArtistDash";
import AddAlbum from "./components/AddAlbum";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const handleCloseS = () => setShowSignup(false);
  const handleShowS = () => setShowSignup(true);

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseL = () => setShowLogin(false);
  const handleShowL = () => setShowLogin(true);

  return (
    <div className="App">
      <Router>
        <NavigationBar handleShow={handleShow} />
        <SignupModal show={showSignup} handleClose={handleCloseS} />
        <LoginModal show={showLogin} handleClose={handleCloseL} />
        <Route path="/" exact component={Home} />
        <Route path="/artist/:id" exact component={ArtistPage} />
        <Route
          path="/artist/:artistId/album/:albumId"
          exact
          component={AlbumPage}
        />
        <Route path="/fanSetup" exact component={FanSetup} />
        <Route path="/me/dash" exact component={ArtistDash} />
        <Route path="/me/addAlbum" exact component={AddAlbum} />
      </Router>
    </div>
  );
}

export default App;
