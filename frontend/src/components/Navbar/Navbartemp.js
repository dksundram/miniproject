import React, { useState } from "react";
import "./navbar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navbartemp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const fetchSuggestions = async (term) => {
    try {
      const response = await fetch(
        `https://teamcapi.onrender.com/search/suggestions?term=${term}`
      );
      const data = await response.json();
      setSuggestions(data.suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    fetchSuggestions(term);
  };

  return (
    <div className="pt-4" id="top">
      <Navbar expand="lg" id="nav">
        {/* bg="dark" variant="dark" */}
        <Navbar.Brand className="logo">
          <b>Team C</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#"
                onClick={() => {
                  navigate("/proapi");
                }}
              >
                Laptops
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className="search-holder">
            <div className="row">
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input rounded-5 pl-3 shadow-none"
                  style={{ outline: "none" }}
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                {/* Render suggestions here */}
                {suggestions.length > 0 && (
                  <ul className="suggestionbar rounded-2">
                    {suggestions.map((suggestion, index) => (
                      <li key={index} className="suggestionli">{suggestion}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Form>
          <div className="ml-auto d-flex align-items-center">
            <Button
              variant="outline-light"
              onClick={() => {
                navigate("/login");
              }}
              className="login-btn rounded-5"
            >
              Hello, Sign In
            </Button>
            <Button
              className="icon-button rounded-5"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <i className="fas fa-shopping-cart"></i>
              View Cart
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbartemp;
