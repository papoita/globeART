import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import useMetaMask from "../hooks/useMetamask";

function Navigation() {
  const { account } = useMetaMask();

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
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex fs-5 text-white text-muted justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/personalcollection">
              My Collection
            </Nav.Link>
            <Nav.Link className="fw-bold" as={Link} to="/nft">
              Available Now
            </Nav.Link>
          </Nav>
          <Nav>
            {account &&
              `Connected Account: ${
                account.slice(0, 5) + "..." + account.slice(38, 42)
              }`}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
