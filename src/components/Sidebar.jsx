import React from "react";
import { Nav } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
const Sidebar = ({ show, handleClose,link }) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          {link.map((link, index) => (
            <Nav.Link className=" p-3" key={index} href={link.href} onClick={handleClose}>
              {link.label}
              <div className="underline"></div>
            </Nav.Link>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
