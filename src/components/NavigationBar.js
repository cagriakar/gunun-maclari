import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavigationBar() {
  const year = new Date().getFullYear();
  const day = new Date().getDate();
  const month = new Date().getMonth();
  return (
    <Navbar
      className="Navbar"
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand className="nav-brand">
        <Link className="link" to="/">
          <h5>GÜNÜN MAÇLARI</h5>
          <h6>{`${day} / ${month + 1} / ${year}`} </h6>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link className="route-link link" to="/">
              Tüm Maçlar
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="route-link link" to="/canlisonuclar">
              Başlayan & Biten Maçlar
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="route-link link" to="/kalanmaclar">
              Kalan Maçlar
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
