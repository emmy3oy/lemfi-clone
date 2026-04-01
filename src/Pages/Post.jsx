// Dashboard.js
import { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedTransfers = JSON.parse(localStorage.getItem("transfers")) || [];
    setPosts(storedTransfers);
  }, []);

  const handleDelete = (id) => {
    const updated = posts.filter(post => post.id !== id);
    setPosts(updated);
    localStorage.setItem("transfers", JSON.stringify(updated));
  };

  return (
    <Container className="py-5" style={{ maxWidth: "700px" }}>
      <h2 className="text-light mb-4 text-center">Transactions Dashboard</h2>
      {posts.length === 0 && <p className="text-light text-center">No transactions yet.</p>}

      {posts.map(post => (
        <Card key={post.id} className="mb-3 p-3" style={{ background: "#111827", color: "#fff" }}>
          <Row>
            <Col>
              <h5>{post.title}</h5>
              <p>{post.content}</p>
              <small className="text-muted">{post.date}</small>
            </Col>
            <Col md="auto">
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(post.id)}>
                Delete
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default Dashboard;