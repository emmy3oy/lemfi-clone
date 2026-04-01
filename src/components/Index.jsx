import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Lock,
  Smartphone,
  Wallet,
} from "lucide-react";

const features = [
  { icon: Zap, title: "Instant Transfers", description: "Send money globally in seconds with near-zero fees." },
  { icon: Shield, title: "Bank-Grade Security", description: "256-bit encryption and multi-factor authentication." },
  { icon: Globe, title: "170+ Currencies", description: "Convert and send in any currency at real-time rates." },
  { icon: TrendingUp, title: "Smart Analytics", description: "Track spending patterns with insights." },
  { icon: Lock, title: "Vault Savings", description: "Securely store funds and earn interest." },
  { icon: Smartphone, title: "Mobile First", description: "Manage everything from your phone." },
];

const stats = [
  { value: "$2.4B+", label: "Transactions processed" },
  { value: "500K+", label: "Active users" },
  { value: "170+", label: "Countries supported" },
  { value: "99.99%", label: "Uptime" },
];

const Index = () => {
  return (
    <div className="app-wrapper">

      <Navbar expand="lg" className="px-4" style={{ background: "#111827" }}>
        <Container>
          <Navbar.Brand className="d-flex align-items-center gap-2 text-white">
            <div className="logo-box">
              <Wallet size={18} color="#fff" />
            </div>
            VaultPay
          </Navbar.Brand>

          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Link to="/login" className="text-decoration-none text-white">
              Login
            </Link>
            <Button className="btn-fintech" as={Link} to="/signup">
              Get Started
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <section className="py-5 text-center">
        <Container>
          <h1 className="heading display-4 mb-3">
            Money moves at the <span style={{ color: "#22c55e" }}>speed of you</span>
          </h1>

          <p className="sub-text mb-4">
            Send, receive, and manage money across borders with zero friction.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Button className="btn-fintech" as={Link} to="/signup">
              Start Free <ArrowRight size={16} />
            </Button>

            <Button variant="outline-light" as={Link} to="/login">
              View Demo
            </Button>
          </div>

          <Row className="mt-5">
            {stats.map((stat) => (
              <Col key={stat.label} xs={6} md={3} className="mb-3">
                <h4 className="text-white">{stat.value}</h4>
                <p className="sub-text">{stat.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="heading">Everything you need</h2>
            <p className="sub-text">Simple. Powerful. Reliable.</p>
          </div>

          <Row>
            {features.map((feature) => (
              <Col md={4} className="mb-4" key={feature.title}>
                <Card className="fintech-card h-100">
                  <Card.Body>
                    <div className="mb-3">
                      <feature.icon color="#22c55e" />
                    </div>

                    <h5 className="text-white">{feature.title}</h5>
                    <p className="sub-text">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 text-center">
        <Container>
          <h2 className="heading mb-3">
            Ready to take control of your money?
          </h2>

          <p className="sub-text mb-4">
            Join thousands already using VaultPay.
          </p>

          <Button className="btn-fintech" as={Link} to="/signup">
            Create Account <ArrowRight size={16} />
          </Button>
        </Container>
      </section>

      <footer className="text-center py-4" style={{ borderTop: "1px solid #1f2937" }}>
        <p className="sub-text mb-0">
          © 2026 VaultPay. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;