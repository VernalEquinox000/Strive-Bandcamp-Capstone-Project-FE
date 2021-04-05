import React from "react";
import {
  
  Container,
  Row,
  Nav,
  Form,
  FormControl,
  Alert,
  Modal,
  Button,
} from "react-bootstrap";

export default function ArtistBar({Header}) {
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