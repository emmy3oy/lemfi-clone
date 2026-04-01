import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container className="py-5 how-it-works text-center position-relative">
      <h2 className="fw-bold mb-4" data-aos="fade-up">How It Works</h2>

      <Row>
        <Col md={4} data-aos="fade-right">
          <h4>1. Create Account</h4>
          <p>Sign up in minutes.</p>
        </Col>

        <Col md={4} data-aos="fade-up">
          <h4>2. Add Recipient</h4>
          <p>Enter who you're sending money to.</p>
        </Col>

        <Col md={4} data-aos="fade-left">
          <h4>3. Send Money</h4>
          <p>Transfer instantly at low fees.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HowItWorks;