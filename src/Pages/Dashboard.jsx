import { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const Dashboard = () => {
  const [transfers, setTransfers] = useState([]);
  const [totals, setTotals] = useState({}); // for summary

  useEffect(() => {
    const storedTransfers = JSON.parse(localStorage.getItem("transfers")) || [];
    setTransfers(storedTransfers);

    const summary = storedTransfers.reduce((acc, t) => {
      if (!acc[t.fromCurrency]) {
        acc[t.fromCurrency] = { sent: 0, received: 0 };
      }
      acc[t.fromCurrency].sent += Number(t.amount);
      acc[t.fromCurrency].received += Number(t.recipientGets);
      return acc;
    }, {});
    setTotals(summary);
  }, []);

  // Delete a transfer
  const handleDelete = (id) => {
    const updatedTransfers = transfers.filter((t) => t.id !== id);
    setTransfers(updatedTransfers);
    localStorage.setItem("transfers", JSON.stringify(updatedTransfers));

    // Update totals
    const summary = updatedTransfers.reduce((acc, t) => {
      if (!acc[t.fromCurrency]) acc[t.fromCurrency] = { sent: 0, received: 0 };
      acc[t.fromCurrency].sent += Number(t.amount);
      acc[t.fromCurrency].received += Number(t.recipientGets);
      return acc;
    }, {});
    setTotals(summary);
  };

  return (
    <Container className="py-5" style={{ maxWidth: "800px", minHeight: "100vh" }}>
      <h2 className="text-light mb-4 text-center">Transactions Dashboard</h2>

      {Object.keys(totals).length > 0 && (
        <Card className="mb-4 p-3" style={{ background: "#1f2937", color: "#fff" }}>
          <h5>Summary by Currency</h5>
          {Object.entries(totals).map(([currency, data]) => (
            <p key={currency} className="mb-1">
              <strong>{currency}:</strong> Sent {data.sent} | Recipient received {data.received.toFixed(2)}
            </p>
          ))}
        </Card>
      )}

      {transfers.length === 0 && (
        <p className="text-light text-center">No transfers made yet.</p>
      )}

      {transfers.map((transfer) => (
        <Card
          key={transfer.id}
          className="mb-3 p-3"
          style={{ background: "#111827", color: "#fff" }}
        >
          <Row>
            <Col>
              <h5>{transfer.title}</h5>
              <p><strong>Recipient Name:</strong> {transfer.recipientName}</p>

              <p>{transfer.content}</p>
              <p>
                <strong>Recipient gets:</strong> {transfer.recipientGets} {transfer.toCurrency}
              </p>
              <small className="text-muted">{transfer.date}</small>
            </Col>
            <Col md="auto" className="d-flex align-items-start">
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleDelete(transfer.id)}
              >
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