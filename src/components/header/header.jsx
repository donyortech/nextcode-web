// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`header ${hasScrolled ? "shadow" : ""}`}>
        <div className="nav container">
          {/* Logo */}
          <a href="/" className="logo">
            nextCode24
          </a>
          {/* Nav Link */}
          <div className={`navbar ${isMenuOpen ? "open-menu" : ""}`}>
            <a href="/" className="nav-link">
              Furniture
            </a>
            <a href="/" className="nav-link">
              Projects
            </a>
            <a href="/" className="nav-link">
              Products
            </a>
            <a href="/" className="nav-link">
              About Us
            </a>
            <a href="/" className="register-btn btn">
              Register
            </a>
          </div>
          {/* Menu Icon */}
          <div
            className={`menu-icon ${isMenuOpen ? "move" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
