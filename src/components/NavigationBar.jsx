import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, withRouter, useHistory, useLocation } from "react-router-dom";
import Bandcamp from "../assets/bandcamp.svg";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn } from "../helpers/functions";
import { getUserById } from "../api/userApi";

export default function NavigationBar({ handleShow, handleClose }) {
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  //New bbelow
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showDropDown, setShowDropDown] = useState(false);

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
        {/* <div className="logo"> */}
        <div
          className={`d-flex justify-content-between w-100 ${
            isLoggedIn() === "false" && "align-items-center"
          }`}
        >
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
          {isLoggedIn() === "false"
            ? ((
                <span style={{ cursor: "pointer" }} onClick={handleShow}>
                  Signup
                </span>
              ),
              (
                <span style={{ cursor: "pointer" }} onClick={handleShow}>
                  Login
                </span>
              ))
            : user && (
                <span>
                  <i class="fas fa-xs fa-heart"></i>
                  <i class="fas fa-xs fa-compass"></i>

                  <img
                    class="profile-img"
                    src={
                      user
                        ? user.picture
                        : "https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                    }
                    alt="user avatar"
                  />
                </span>
              )}
        </div>
      </Container>
    </Navbar>
  );
}
