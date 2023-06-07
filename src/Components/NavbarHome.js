import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import InventoryPage from "../Pages/InventoryPage";
import { ItemDetailPage } from "../Pages/ItemDetailPage";

const NavbarHome = () => {
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/inventory"}>
              Inventory
            </Nav.Link>
            <Nav.Link as={Link} to={"/detail"}>
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/detail" element={<ItemDetailPage />} />
      </Routes>
    </Router>
  );
};

export default NavbarHome;
