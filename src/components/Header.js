import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  function logoutHandler() {
    dispatch(logout());
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='/'>Delite Caterers</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {userInfo && (
                <LinkContainer to='/institutes'>
                  <Nav.Link className='px-5'>Institutes</Nav.Link>
                </LinkContainer>
              )}
              {userInfo && (
                <NavDropdown title='Bills' id='username'>
                  <LinkContainer to='/institutebills'>
                    <NavDropdown.Item className='px-4'>
                      Institute Bills
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/billinghistory'>
                    <NavDropdown.Item className='px-4'>
                      All Bills
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              {userInfo && (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {/* <LinkContainer to='/register'>
                  <Nav.Link className='px-4'>
                    <i className='fa-solid fa-user'></i> Register
                  </Nav.Link>
                </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
