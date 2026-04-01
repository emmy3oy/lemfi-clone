import { Container, Button } from "react-bootstrap";

function CTA() {
  return (
    <div className="bg-dark text-white text-center py-5">
      <Container>
        <h2 className="fw-bold mb-3">
          Ready to Send Money Smarter?
        </h2>

        <Button variant="success" size="lg">
          Get Started Now
        </Button>
      </Container>
    </div>
  );
}

export default CTA;