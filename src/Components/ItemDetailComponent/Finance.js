import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./Finance.css";

const Finance = () => {
  return (
    <div>
      <div className="finance-section">
        <h1>Finance</h1>
        <h2>Step 1. Estimate your payment</h2>

        {/* ///////////////////////////////////////// */}
        <div>
          <FloatingLabel
            controlId="floatingInput"
            label="Down Payment"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
        </div>

        <div>
          <FloatingLabel controlId="floatingSelect" label="Credit Score">
            <Form.Select aria-label="Floating label select example">
              <option></option>
              <option value="1">Excellent</option>
              <option value="2">Good</option>
              <option value="3">Bad</option>
              <option value="4">Let's Not Talk About It</option>
            </Form.Select>
          </FloatingLabel>
        </div>

        <div>
          <FloatingLabel controlId="floatingSelect" label="Term Length">
            <Form.Select aria-label="Term Length">
              <option></option>
              <option value="1">24 Months</option>
              <option value="2">36 Months</option>
              <option value="3">48 Months</option>
              <option value="4">60 Months</option>
            </Form.Select>
          </FloatingLabel>
        </div>

        <div>
          <FloatingLabel controlId="floatingSelect" label="Annual Mileage">
            <Form.Select aria-label="Annual Mileage">
              <option></option>
              <option value="1">10,000</option>
              <option value="2">12,000</option>
              <option value="3">15,000</option>
            </Form.Select>
          </FloatingLabel>
        </div>

        <div>
          <FloatingLabel
            controlId="floatingInput"
            label="Trading Value"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
        </div>
      </div>
      {/* ///////////////////////////////////////// */}
      <div className="payment-summary-section">
        <h1>Payment Summary</h1>
        <div className="payment-content-section">
          <div className="payment-item">
            $503 <span className="payment-item-content">per month</span>
          </div>
          <div className="payment-item">
            12,000 <span className="payment-item-content">Annual Mileage</span>
          </div>
        </div>
        <div className="payment-content-section">
          <div className="payment-item">
            $36 <span className="payment-item-content">month</span>
          </div>
          <div className="payment-item">
            $3,253{" "}
            <span className="payment-item-content">Amount due at signing</span>
          </div>
        </div>
        <div className="payment-content-section">
          <div className="payment-item">MSRP</div>
          <div className="payment-item" id="payment-msrp">
            $41,868
          </div>
        </div>
        <div className="payment-content-minor">
          Tax, title and license not included
        </div>
        <div className="payment-content-print">
          Payments may vary based on actual vehicle, model & options selected.
        </div>
        <div className="payment-fine-print">
          Includes First Monthly Payment, Cash Out of Pocket, and Acquisition
          Fee. Excludes tax, title, licensing, fees, applicable rebates or cash
          offers, and security deposit. Payments calculated using this tool are
          ESTIMATES ONLY and do not include applicable taxes, title, licensing
          and fees. ACTUAL PRICES AND PAYMENTS MAY BE DIFFERENT. Lease payment
          calculations are based on term and annual mileage. Available on
          approved credit to very well qualified customers.
        </div>
      </div>
    </div>
  );
};

export default Finance;
