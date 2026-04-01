import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: authentication logic here
    navigate("/dashboard");
  };

  return (
    <Container className="login-page d-flex align-items-center justify-content-center vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="p-4 shadow rounded bg-dark text-light">
            <h2 className="mb-4 text-center">Login to LemFi</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100 gradient-btn">
                Login
              </Button>
            </Form>
            <p className="mt-3 text-center">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;