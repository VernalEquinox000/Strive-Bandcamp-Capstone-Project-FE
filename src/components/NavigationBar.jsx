import React, { useState, useEffect } from "react";
import { Navbar, Container, Modal, Button } from "react-bootstrap";
import { Link, withRouter, useHistory, useLocation } from "react-router-dom";
import Bandcamp from "../assets/bandcamp.svg";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn } from "../helpers/functions";
import { getUserById } from "../api/userApi";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";

export default function NavigationBar() {
  //const [loading, setLoading] = useState(false);

  //New bbelow
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showDropDown, setShowDropDown] = useState(false);

  const [show, setshow] = useState(false);
  const handleClose = () => {
    setshow(false);
    setCurrentModal("");
  };
  const handleshow = (modalType) => {
    setshow(true);
    setCurrentModal(modalType);
  };
  const [currentModal, setCurrentModal] = useState(null);
  /* const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true); */

  useEffect(() => {
    //if (isLoggedIn() === "true") {
    dispatch(async (dispatch) => {
      try {
        const response = await getUserById("me");
        if (response.statusText === "OK") {
          dispatch({
            type: "SET_USER",
            payload: response.data,
          });
        }
      } catch (error) {
        console.log(error.response);
      }
    });
    //}
  }, []);

  /* const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    handleClose();
    setLoading(false);
  }; */

  return (
    <Navbar bg="light" variant="light">
      <Container className="navContainer">
        <div className="logo">
          <Link to="/">
            <Navbar.Brand>
              <img
                src={Bandcamp}
                width="100px"
                height="40px"
                className="d-inline-block align-top"
                alt="Bandcamp logo"
              />
            </Navbar.Brand>
          </Link>
        </div>
        <div className="search">
          <form method="post">
            <input
              type="text"
              name="subject"
              class="bandcampSearch"
              value=""
              placeholder="Search"
            />
          </form>
        </div>

        <div className="setlog">
          {
            /* isLoggedIn() === "false" */
            !user ? (
              <>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleshow("signup")}
                >
                  Signup
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleshow("login")}
                >
                  Login
                </span>
              </>
            ) : (
              <span className="span-header">
                <i class="far fa-heart" style={{ width: "30px" }}></i>
                <div className="wrap-profile">
                  <img
                    class="profile-img"
                    src={
                      user.profilePic ||
                      "https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                    }
                    alt="user avatar"
                    style={{ width: "30px" }}
                    onClick={() => history.push("/me/dash")}
                  />
                </div>
              </span>
            )
          }
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        {currentModal === "login" && show ? (
          <LoginModal handleClose={handleClose} />
        ) : currentModal === "signup" && show ? (
          <SignupModal handleClose={handleClose} />
        ) : (
          ""
        )}
      </Modal>
    </Navbar>
  );
}
