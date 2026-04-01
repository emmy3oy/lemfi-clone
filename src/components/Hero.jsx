import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import phoneMockup from "../assets/phoneMockup.png";
import "../index.css";
import { Link } from "react-router-dom";

function Homes() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 500);

    
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home-page">
      
      <Container className="py-5 text-center position-relative">
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-start">
            <h1 className={`fw-bold hero-text ${reveal ? "reveal" : ""}`}>
              Why Choose <span className="gradient-text">LemFi</span>?
            </h1>
            <p className={`hero-subtext ${reveal ? "reveal-delay" : ""}`}>
              Seamless, fast, and secure global money transfers at your fingertips.
            </p>
            <div className="my-3">
              <Badge bg="light" text="dark" className="me-2">USD</Badge>
              <Badge bg="light" text="dark" className="me-2">GBP</Badge>
              <Badge bg="light" text="dark">EUR</Badge>
            </div>
            <Button
                as={Link}
                to="/signup"
                size="lg"
                className="mt-3 gradient-btn"
              >
                Get Started
              </Button>
          </Col>

          <Col md={6} className="position-relative">
            <img
              src={phoneMockup}
              alt="LemFi App"
              className="floating-phone"
            />
          </Col>
        </Row>
      </Container>

      
    </div>
  );
}

export default Homes;