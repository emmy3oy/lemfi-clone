import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import "../index.css";

function Pricing() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("CAD");
  const [recipientGets, setRecipientGets] = useState(0);
  const [recipientName, setRecipientName] = useState(""); // ✅ added recipient name

  const navigate = useNavigate();

  const exchangeRates = {
    NGN: 1,
    USD: 0.0024,
    CAD: 0.0031,
    EUR: 0.0022,
    GBP: 0.0019,
    CHF: 0.0022,
    SEK: 0.024,
    NOK: 0.025,
    DKK: 0.016,
    PLN: 0.010,
    CZK: 0.051,
    HUF: 0.89,
    BGN: 0.0043,
    RON: 0.010,
    HRK: 0.016,
    ISK: 0.33,
    TRY: 0.044,
    UAH: 0.089,
    RUB: 0.19,
    BYN: 0.0065,
    MKD: 0.13,
    RSD: 0.27,
    MTL: 0.004,
    IEU: 0.0022,
    LVL: 0.0015,
    LTL: 0.0064,
    EEK: 0.034,
    CYP: 0.0037,
    SIT: 0.0047,
    BGD: 0.20,
    INR: 0.20,
    AUD: 0.0036,
    NZD: 0.0039,
  };

  const countries = Object.keys(exchangeRates).map((code) => ({
    code,
    name: code,
  }));

  useEffect(() => {
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    setRecipientGets((amount * rate).toFixed(2));
  }, [amount, fromCurrency, toCurrency]);

  const handleSendMoney = () => {
    if (!recipientName) {
      alert("Please enter recipient name!");
      return;
    }

    const transfer = {
      id: Date.now(),
      amount,
      fromCurrency,
      toCurrency,
      recipientName, // ✅ include recipient name
      recipientGets,
      date: new Date().toLocaleString(),
      title: `Transfer ${amount} ${fromCurrency} → ${toCurrency}`,
      content: `Sending ${amount} ${fromCurrency} to ${recipientName} (${toCurrency}) - Recipient gets ${recipientGets} ${toCurrency}`,
    };

    const existingTransfers = JSON.parse(localStorage.getItem("transfers")) || [];
    const updatedTransfers = [transfer, ...existingTransfers];
    localStorage.setItem("transfers", JSON.stringify(updatedTransfers));

    alert("✅ Transfer saved!");
    navigate("/Transfer");
  };

  return (
    <Container fluid className="pricing-page py-5 text-light" style={{ background: "#1e293b" }}>
      <h2 className="fw-bold text-center mb-4">International Money Transfer</h2>
      <p className="text-center mb-5">
        At Great Value. Easily send money directly to loved ones across the globe
      </p>

      <Card className="p-4 mb-5" style={{ background: "#6b8cd4ff", maxWidth: "600px", margin: "0 auto" }}>
        <Row className="align-items-center mb-3">
          <Col>
            <Form.Label className="text-muted">You send</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Col>
          
          <Col>
            <Form.Label className="text-muted">From</Form.Label>
            <Form.Control
              as="select"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} - {c.name}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>

        <Row className="align-items-center mb-3">
          <Col>
            <Form.Label className="text-muted">Recipient Name</Form.Label>
            <Form.Control
              type="text"
              value={recipientName}
              placeholder="Enter recipient name"
              onChange={(e) => setRecipientName(e.target.value)}
            />
          </Col>

          <Col>
            <Form.Label className="text-muted">Recipient gets</Form.Label>
            <Form.Control
              type="text"
              value={recipientGets}
              readOnly
            />
          </Col>

          <Col>
            <Form.Label className="text-muted">To</Form.Label>
            <Form.Control
              as="select"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} - {c.name}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col>
            <p className="mb-1"><strong>Transfer fees:</strong> Zero</p>
            <p className="mb-1"><strong>We’ll convert:</strong> {amount} {fromCurrency}</p>
            <p className="mb-1"><strong>We’ll charge you:</strong> {amount} {fromCurrency}</p>
            <p className="mb-0"><strong>Estimated arrival:</strong> Usually within minutes</p>
          </Col>
        </Row>

        <div className="text-center mt-3">
          <Button variant="success" onClick={handleSendMoney}>
            Send Money
          </Button>
        </div>
      </Card>

      <p className="text-center">
        Transfer to friends and family in over 30 countries
      </p>
    </Container>
  );
}

export default Pricing;