import React from "react";
import Nav from "react-bootstrap/Nav";

const FillJustNav = (props) => {
  const selectedFilter = (id) => {
    console.log("test");
    props.selectedFilter(id);
  };
  return (
    <Nav fill variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link eventkey="link-0" onClick={() => selectedFilter(0)}>
          Cars & Minivan{" "}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={() => selectedFilter(1)}>
          Trucks{" "}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={() => selectedFilter(2)}>
          Crossovers & SUVS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={() => selectedFilter(3)}>
          {" "}
          Electrified{" "}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default FillJustNav;
