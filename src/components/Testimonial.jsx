import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container className="py-5 testimonials text-center position-relative">
      <h2 className="fw-bold mb-4" data-aos="fade-up">What Users Say</h2>

      <Row>
        <Col md={4} data-aos="fade-right">
          <Card className="p-3 shadow-sm">
            <p>"Super fast and reliable!"</p>
            <strong>- David</strong>
          </Card>
        </Col>

        <Col md={4} data-aos="fade-up">
          <Card className="p-3 shadow-sm">
            <p>"Best app for sending money abroad."</p>
            <strong>- Sarah</strong>
          </Card>
        </Col>

        <Col md={4} data-aos="fade-left">
          <Card className="p-3 shadow-sm">
            <p>"Low fees and great rates!"</p>
            <strong>- James</strong>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;