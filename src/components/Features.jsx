import { Container, Row, Col } from "react-bootstrap";
import { FaBolt, FaGlobe, FaLock } from "react-icons/fa";
import "../index.css";

function Features() {
  return (
    <Container
      fluid
      className="features-page py-5 text-center text-light"
      id="features"
    >
      <h2 className="fw-bold mb-5">Why Choose LemFi?</h2>

      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <div className="feature-card p-4 rounded shadow-sm">
            <FaBolt size={50} className="mb-3 gradient-icon" />
            <h5>Instant Transfers</h5>
            <p>Send money globally in seconds with low fees.</p>
          </div>
        </Col>

        <Col md={4} className="mb-4">
          <div className="feature-card p-4 rounded shadow-sm">
            <FaGlobe size={50} className="mb-3 gradient-icon" />
            <h5>Global Reach</h5>
            <p>Send to over 50+ countries securely.</p>
          </div>
        </Col>

        <Col md={4} className="mb-4">
          <div className="feature-card p-4 rounded shadow-sm">
            <FaLock size={50} className="mb-3 gradient-icon" />
            <h5>Secure & Trusted</h5>
            <p>Bank-level encryption ensures your money is safe.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;