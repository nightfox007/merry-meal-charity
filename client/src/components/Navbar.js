import React from 'react'
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap'
import merryLogo from '../images/MerryMeal_Logo.png'

const NavbarC = () => {
  return (
    <div className='mainnav'>
      <div className='sidebox'>
        <img className='nav-logo' src={merryLogo} alt='logo' />
      </div>
      <div className='side'>
        <div className='topbar'>
          <div className='topbar-content'>
            <ul>+60 123456789</ul>
            <ul>email@email.com</ul>
          </div>
        </div>
        <div className='navbar'>
          <Navbar className='nav-contents'>
            <Container className='need'>
              <Nav className='me-auto nav-links-container'>
                <Nav.Link className='nav-links' href='/'>
                  Home
                </Nav.Link>
                <Nav.Link className='nav-links' href='/aboutus'>
                  About
                </Nav.Link>

                <NavDropdown
                  className='nav-links'
                  title='Get Help'
                  id='basic-nav-dropdown'
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href='member'>
                    Member Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item href='caregiver'>
                    Caregiver Registration
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className='nav-links'
                  title='Get Involve'
                  id='basic-nav-dropdown'
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href='volunteer'>
                    Volunteer
                  </NavDropdown.Item>
                  <NavDropdown.Item href='foodpartner'>
                    Food Service Partner
                  </NavDropdown.Item>
                  <NavDropdown.Item href='deliverypartner'>
                    Delivery Partner
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className='nav-links' href='foodmenu'>
                  Food Menu
                </Nav.Link>
                <Nav.Link className='nav-links' href='contact'>
                  Contact
                </Nav.Link>
                <Nav.Link href='#' disabled>
                  |
                </Nav.Link>
                <Button className='donateBtn' href='donate'>
                  Donate
                </Button>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  )
}

export default NavbarC
