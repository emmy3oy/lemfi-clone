import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="bg-black text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>LemFi</h5>
            <p>Fast, secure global payments.</p>
          </Col>

          <Col md={6} className="text-md-end">
            <p>© 2026 LemFi. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;