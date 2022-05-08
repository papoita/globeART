import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";

import useMetaMask from "../hooks/useMetamask";

function Navigation() {
  const { connect, isActive, account, disconnect, isDisable } = useMetaMask();

  return (
    <Navbar className="sticky-top" bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand
          className="fs-3 fw-bold"
          thumbnail="true"
          src="./logosm.png"
          as={Link}
          to="/"
        >
          {" "}
          <Image bg="primary" style={{ width: "5rem" }} src="./logosm.png" />
          globeART
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>

      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold" as={Link} to="/nftglobegallery">
              Gallery
            </Nav.Link>
            <Nav.Link href="#link"> About Us </Nav.Link>
            
            <Nav.Link className="fw-bold" as={Link} to="/personalcollection">
              My Collection
            </Nav.Link>
            <Nav.Link className="fw-bold" as={Link} to="/nftbuyitem">
              Available Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Container>
        <Button
            variant="secondary"
            onClick={connect}
            disabled={isDisable}
            size="sm"
            className="m-2 p-2 fs-6 align-middle text-center">
            Connect MetaMask
          </Button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
