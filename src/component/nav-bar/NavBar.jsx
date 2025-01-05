import "./nav-bar.css";
import { FaHome, FaSearch, FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        {/* Navbar Brand */}
        <Link className="navbar-brand" to="/">
          RentUp
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNavbar"
          aria-controls="mobileNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
          id="mobileNavbar"
        >
          <ul className="navbar-nav d-flex flex-column flex-lg-row justify-content-center align-items-center w-100">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                to="/"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/search" ? "active" : ""}`}
                to="/search"
              >
                <FaSearch /> Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/contact-us" ? "active" : ""
                }`}
                to="/contact-us"
              >
                <FaPhoneAlt /> Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/about-us" ? "active" : ""
                }`}
                to="/about-us"
              >
                <FaUserAlt /> About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
