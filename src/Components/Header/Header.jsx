import React from "react";
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Navbar } from "flowbite-react";

function Header({ isDarkMode, toggleTheme }) {
  return (
    <div>
      {/* Navbar setup */}
      <Navbar
        fluid
        style={{
          backgroundColor: isDarkMode ? 'black' : 'white',
          height: "80px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Navbar.Brand href="#">
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://cdn-icons-png.flaticon.com/512/4661/4661318.png"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Sudisha P V</span>
              </Dropdown.Header>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <span
            className="text-2xl font-bold"
            style={{ color: isDarkMode ? 'white' : 'black' }}
          >
            Sudisha P V
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link
            as={Link}
            to="/"
            className="text-2xl"
            style={{ color: isDarkMode ? 'white' : 'black' }}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/project"
            className="text-2xl"
            style={{ color: isDarkMode ? 'white' : 'black' }}
          >
            Projects
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            to="/contact"
            className="text-2xl"
            style={{ color: isDarkMode ? 'white' : 'black' }}
          >
            Contact
          </Navbar.Link>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              marginLeft: '20px',
              backgroundColor: isDarkMode ? '#444' : '#ddd',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              color: isDarkMode ? 'white' : 'black',
              cursor: 'pointer',
            }}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
