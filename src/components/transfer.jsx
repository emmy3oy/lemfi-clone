import { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function Transfers() {
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
    <Container className="py-5" style={{ background: "#1e293b", minHeight: "100vh" }}>
      {posts.length === 0 && (
        <p className="text-light text-center">Make a Transfer!</p>
      )}

      {posts.map((post) => (
        <Card
          key={post.id}
          className="mb-3 p-3"
          style={{ background: "#7595d8ff", color: "#fff" }}
        >
          <Row>
            <Col>
              <h5>{post.title}</h5>
              <p>{post.content}</p>
              <small className="text-muted">{post.date}</small>
            </Col>
            <Col md="auto" className="d-flex align-items-start gap-2">
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(post.id)}>
                Delete
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
}

export default Transfers;