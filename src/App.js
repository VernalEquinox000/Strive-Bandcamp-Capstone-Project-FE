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
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />

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
        <Route path="/player" exact component={Player} />
      </Router>
    </div>
  );
}

export default App;
