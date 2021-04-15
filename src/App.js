import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import ModalIntro from "./components/ModalIntro";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import Login from "./components/Login";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FanSetup from "./components/FanSetup";
export const AuthContext = React.createContext(); // added this
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //new below
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">
        {/* new line below */}

        <Router>
          <NavigationBar handleShow={handleShow} />
          <ModalIntro show={show} handleClose={handleClose} />
          {!state.isAuthenticated ? (
            <Login show={show} handleClose={handleClose} />
          ) : (
            "logged in"
          )}
          <Route path="/" exact component={Home} />
          <Route path="/artist/:id" exact component={ArtistPage} />
          <Route
            path="/artist/:artistId/album/:albumId"
            exact
            component={AlbumPage}
          />
          <Route path="/fanSetup" exact component={FanSetup} />
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
