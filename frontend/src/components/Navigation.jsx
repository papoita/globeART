import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";

function Navigation() {
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
              NFT Art Gallery
            </Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>

            <NavDropdown title="Collections" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/nftglobegallery">
                Gallery globeArt
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nftbuyitem">
                Buy globeART
              </NavDropdown.Item>
              <NavDropdown.Item href="/personalcollection">
                My Collection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Sign In/Out
              </NavDropdown.Item>
              {/* 
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
