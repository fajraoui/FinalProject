import React, { useState } from 'react';
import './navbar.css';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import { Link, NavLink } from 'react-router-dom';
import { FaHandsHelping } from 'react-icons/fa';

const Navbar=()=> {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='purple'>
      <MDBContainer fluid>
      <NavLink exact to="/" className="nav-logo">
              Food Rescue
              <FaHandsHelping/>
            </NavLink>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <Link active aria-current='page' to="/">
                Home
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/news">News</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="about">About Us</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link  to="contact">
                Contact Us
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Be the Rescue
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link to="/register">Donate Food</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/vregister">Rescue Food</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/signUp">Receive Food</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default Navbar;