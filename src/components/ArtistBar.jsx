import React, { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Nav,
  Form,
  FormControl,
  Alert,
  Modal,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Bandcamp from "../assets/bandcamp.svg";
import ModalIntro from "../components/ModalIntro";

export default function ArtistBar() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12}>
                        <img style={{ width="915px", height="180px" }} src={Header} />
                    </Col>
                </Row>
                <Row><Col>
                <p><a>Music</a></p></Col></Row>
            </Container>
        </div>
    )
}