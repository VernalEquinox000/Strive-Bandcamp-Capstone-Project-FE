import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterSignup() {
  return (
    <Container fluid className="footer">
      <Row className="text-left">
        <Col className="offset-1 col-3 sm-col-1 md-col-2 lg-col-3">
          <p>
            <a href="#" alt="About">
              About Us
            </a>
            <br />
            <br />
            <a href="#" alt="Fair">
              Fair Trade Music Policy
            </a>
            <br />
            <br />
            <a href="#" alt="Jobs">
              Jobs
            </a>
            <br />
            <br />
            Apps:{" "}
            <a href="#" alt="Android">
              Android
            </a>{" "}
            |{" "}
            <a href="#" alt="iOS">
              iOS
            </a>
            <br />
            <br />
            <a href="#" alt="Buttons">
              Buttons / Logos
            </a>
            <br />
            <br />
            <br />
            <br />
            <a href="#" alt="Terms">
              Terms of Use
            </a>
            <br />
            <br />
            <a href="#" alt="Privacy">
              Privacy
            </a>
            <br />
            <br />
            <a href="#" alt="Copyright">
              Copyright Policy
            </a>
            <br />
          </p>
        </Col>
        <Col className="col-3 sm-col-1 md-col-2 lg-col-3">
          <p>
            <a href="#" alt="gift">
              Gift Cards
            </a>
            <br />
            <br />
            <a href="#" alt="Daily">
              Bandcamp Daily
            </a>
            <br />
            <br />
            <a href="#" alt="Fb">
              Facebook
            </a>
            <br />
            <br />
            <a href="#" alt="Twitter">
              Twitter | Status
            </a>
            <br />
            <br />
            <a href="#" alt="Instagram">
              Instagram
            </a>
            <br />
            <br />
            <a href="#" alt="Contact">
              Contact/Help
            </a>
            <br />
            <br />
          </p>
        </Col>
        <Col className="offset-1 col-3 sm-col-1 md-col-2 lg-col-3">
          <p>
            View:{" "}
            <a href="#" alt="coll">
              collection
            </a>{" "}
            |{" "}
            <a href="#" alt="site">
              site
            </a>
            |{" "}
            <a href="#" alt="pur">
              purchase
            </a>
            <br />
            <br />
            <a href="#" alt="b4a">
              Bandcamp for Artists
            </a>
            <br />
            <br />
            <a href="#" alt="b4f">
              Bandcamp for Fans
            </a>
            <br />
            <br />
            <a href="#" alt="b4l">
              Bandcamp for Labels
            </a>
            <br />
            <br />
            <a href="#" alt="Log out">
              Log out
            </a>
            <br />
            <br />
            <a href="#" alt="Mobile">
              Mobile view
            </a>
            <br />
            <br />
            <select>
              <option>English</option>
              <option>Italiano</option>
            </select>
            <br />
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
}
