import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import logo from "../photo/logo.png"

const AppNavbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const fetchLoginData = async () => {
    try {
      setIsLoading(true);
      console.log("Log In API called");
    } catch (error) {
      console.error("Error during Log In:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSignupData = async () => {
    try {
      setIsLoading(true);
      console.log("Sign Up API called");
    } catch (error) {
      console.error("Error during Sign Up:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      console.log("Fetching data...");
    }
  }, [isLoading]);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src={logo}
            alt="Freelancer Logo"
            className="logo"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? "Close Menu" : "Menu"}
        </button>

        {/* Navigation Links */}
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <div className="navbar-link">
            Hire Freelancers <span className="dropdown-arrow">▼</span>
            <div className="dropdown">
              <a href="#hire-web">Web Developers</a>
              <a href="#hire-design">Designers</a>
              <a href="#hire-writers">Writers</a>
            </div>
          </div>
          <div className="navbar-link">
            Find Work <span className="dropdown-arrow">▼</span>
            <div className="dropdown">
              <a href="#work-web">Web Development</a>
              <a href="#work-design">Design Projects</a>
              <a href="#work-writing">Writing Jobs</a>
            </div>
          </div>
          <div className="navbar-link">
            Solutions <span className="dropdown-arrow">▼</span>
            <div className="dropdown">
              <a href="#solution-1">Solution 1</a>
              <a href="#solution-2">Solution 2</a>
              <a href="#solution-3">Solution 3</a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <button
            className="btn-outline"
            onClick={fetchLoginData}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Log In"}
          </button>
          <button
            className="btn-primary"
            onClick={fetchSignupData}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
          <button
            className="btn-post"
            onClick={() => alert("Post a Project button clicked!")}
          >
            Post a Project
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
