import React, { useState, useEffect } from "react";
import { Navbar, Container, Modal } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import Bandcamp from "../assets/bandcamp.svg";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn } from "../helpers/functions";
import { getUserById, logout } from "../api/userApi";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";

export default function NavigationBar() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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

  useEffect(() => {
    if (isLoggedIn() === "true") {
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
    }
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
                width="120px"
                height="50px"
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
        {
          /* isLoggedIn() === "false" */
          !user ? (
            <>
              <span
                style={{ cursor: "pointer", fontSize: "16px" }}
                onClick={() => handleshow("signup")}
              >
                Signup
              </span>
              {"         "}
              <span
                style={{ cursor: "pointer", fontSize: "16px" }}
                onClick={() => handleshow("login")}
              >
                Login
              </span>
            </>
          ) : (
            <>
              {user && user.role === "fan" && (
                <Link to="/me/collection">
                  <i class="far fa-heart fa-2x"></i>
                </Link>
              )}
              {user && user.role === "artist" && (
                <Link to="me/dash">
                  <i class="fas fa-heart fa-2x"></i>
                </Link>
              )}
              {user && (
                //<span className="span-header">
                <>
                  <Link
                    to={
                      user.role === "fan"
                        ? "/me/fanprofile"
                        : "/me/artistprofile"
                    }
                  >
                    <div className="wrap-profile">
                      <img
                        class="profile-img"
                        src={
                          user.profilePic ||
                          "https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                        }
                        alt="profile"
                        style={{ width: "36px" }}
                        //onClick={() => history.push("/me/dash")}
                      />
                    </div>
                  </Link>
                  <i
                    class="fas fa-sign-out-alt fa-2x"
                    onClick={() => {
                      localStorage.setItem("LoggedIn", false);
                      /* if (
                        location.pathname === "/profile/me" &&
                        user.role === "patient"
                      ) { */
                      history.push("/");
                      /* } else if (
                        location.pathname === "/profile/me" &&
                        (user.role === "doctor" || user.role === "clinic")
                      ) {
                        history.push("/profile/" + user._id);
                      } */
                      dispatch({
                        type: "UNSET_USER",
                      });
                      logout();
                    }}
                  ></i>
                </>
              )}
            </>
          )
        }
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
