import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand
          className="fs-3 fw-bold"
          thumbnail="true"
          src="./logosm.png"
          as={Link}
          to="/">
          {" "}
          <Image bg="primary" style={{ width: "5rem" }} src="./logosm.png" />
          globeART
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>

      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold" as={Link} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link className="fw-bold" as={Link} to="/personalcollection">
              My Collection
            </Nav.Link>
            <Nav.Link className="fw-bold" as={Link} to="/nft">
              Available Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
