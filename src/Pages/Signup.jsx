import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Wallet } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="app-wrapper">
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <div style={{ width: "100%", maxWidth: "420px" }}>

          {/* Header */}
          <div className="text-center mb-4">
            <Link to="/" className="d-inline-flex align-items-center gap-2 mb-3 text-decoration-none">
              <div className="logo-box">
                <Wallet size={20} color="#fff" />
              </div>
              <span className="logo-text">VaultPay</span>
            </Link>

            <h3 className="heading">Create your account</h3>
            <p className="sub-text">Send and manage money globally with ease</p>
          </div>

          {/* Form */}
          <Card className="fintech-card">
            <Form onSubmit={handleSubmit}>
              
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" className="btn-fintech w-100">
                Create Account
              </Button>
            </Form>
          </Card>

          {/* Footer */}
          <p className="text-center mt-4 footer-text">
            Already have an account?{" "}
            <Link to="/login" className="footer-link">
              Sign in
            </Link>
          </p>

        </div>
      </Container>
    </div>
  );
};

export default Signup;