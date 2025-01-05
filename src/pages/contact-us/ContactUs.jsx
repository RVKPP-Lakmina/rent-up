import React from "react";
import "./contact-us.css";

const ContactUs = () => {
  return (
    <div className="contact-us bg-light">
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: "#ff5f00" }}>
          Contact Us
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-block w-100"
                style={{ backgroundColor: "#ff5f00", color: "white" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
