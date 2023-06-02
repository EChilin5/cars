import React from "react";
import Nav from "react-bootstrap/Nav";

const FillJustNav = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Cars & Minivan</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Trucks</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Crossovers & SUVS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" disabled>
          Electrified
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default FillJustNav;
