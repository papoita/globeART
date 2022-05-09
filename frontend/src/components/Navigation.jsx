import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";

import useMetaMask from "../hooks/useMetamask";

function Navigation({ web3Handler }) {
  const { connect, account, isDisable } = useMetaMask();

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
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
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
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
      <Container>
        {account ? (
          <Nav.Link
            href={`https://etherscan.io/address/${account}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button nav-button btn-sm mx-4">
            <Button variant="outline-light">
              Connected to:{" "}
              {account.slice(0, 5) + "..." + account.slice(38, 42)}
            </Button>
          </Nav.Link>
        ) : (
          <Button
            variant="secondary"
            onClick={connect}
            disabled={isDisable}
            size="sm"
            className="button nav-button btn-sm mx-4">
            Connect MetaMask
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default Navigation;
