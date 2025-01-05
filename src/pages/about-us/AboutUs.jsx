import React from "react";
import "./about-us.css";
import {
  FaHome,
  FaRocket,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-container py-5">
      <div className="text-center mb-5">
        <h1 className="about-heading">About Us</h1>
        <p className="about-subheading">
          Welcome to <span className="fw-bold">RentUp</span>, where we redefine
          rental experiences with innovation, transparency, and convenience.
        </p>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <FaHome className="about-icon" />
          <h3 className="about-title">Who We Are</h3>
          <p className="about-text">
            At RentUp, we simplify the journey of finding and managing rental
            properties with cutting-edge tools and services.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <FaRocket className="about-icon" />
          <h3 className="about-title">Our Mission</h3>
          <p className="about-text">
            To empower communities with innovative solutions, making rentals
            accessible to everyone, everywhere.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <FaUsers className="about-icon" />
          <h3 className="about-title">Why Choose Us</h3>
          <p className="about-text">
            Trusted listings, 24/7 support, AI-powered tools, and a modern
            platform tailored to your needs.
          </p>
        </div>
      </div>

      <div className="row text-center">
        <h2 className="about-values-heading">Our Values</h2>
        <div className="col-md-4 mb-4">
          <FaHandshake className="about-icon" />
          <h4 className="about-title">Integrity</h4>
          <p className="about-text">
            Transparency and trust are at the heart of everything we do.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <FaLightbulb className="about-icon" />
          <h4 className="about-title">Innovation</h4>
          <p className="about-text">
            Continuously enhancing your experience with creative solutions.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <FaShieldAlt className="about-icon" />
          <h4 className="about-title">Community</h4>
          <p className="about-text">
            Building lasting relationships with customers and partners.
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3 className="about-footer-heading">Join the RentUp Movement</h3>
        <p className="about-footer-text">
          We’re more than a website; we’re a community. Let’s make finding a
          place as exciting as living there!
        </p>
        <button className="btn about-button">Explore RentUp</button>
      </div>
    </div>
  );
};

export default AboutUs;
