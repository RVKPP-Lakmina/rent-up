import React from "react";
import Slider from "react-slick";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { propertiesData } from "../service/data";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LightboxGallery from "./LightboxGallery";

// Google Maps container styles
const containerStyle = {
  width: "100%",
  height: "300px",
};

const EstateDetails = () => {
  // Get the property ID from the URL parameters
  let { id } = useParams();
  const estateData = propertiesData.properties || [];

  // Find the property data that matches the ID
  const data = estateData.find((estate) => estate.id === id) || null;

  // Load the Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // If no property data is found, display a message
  if (!data) {
    return <div>No Property Found</div>;
  }

  return (
    <div className="estate-details container py-5">
      {/* Breadcrumb navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="nav-link" to="/search" style={{ color: "orange" }}>
              Search
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {data.title}
          </li>
        </ol>
      </nav>
      <div className="row">
        {/* Left Column - Image Slider */}
        <div className="col-lg-6 mb-4">
          <h3>{data.type} Details</h3>

          {/* Lightbox Gallery for property images */}
          <LightboxGallery
            images={data.picturePanel.map((item) => ({
              thumbnail: item,
              full: item,
              caption: item,
            }))}
          />
        </div>

        {/* Right Column - Property Details */}
        <div className="col-lg-6">
          <h4 style={{ color: "#ff5f00" }}>{data.title}</h4>
          <p>
            <strong>Location:</strong> {data.location}
          </p>
          <p>
            <strong>Price:</strong> ${data.price.toLocaleString()}
          </p>
          <p>
            <strong>Bedrooms:</strong> {data.bedrooms}
          </p>
          <p>
            <strong>Tenure:</strong> {data.tenure}
          </p>
          <p>
            <strong>Added:</strong>{" "}
            {`${data.added.day} ${data.added.month}, ${data.added.year}`}
          </p>
          <p>
            <strong>Description:</strong> {data.description}
          </p>
          <a
            // href={data.url}
            className="btn btn-primary mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Agent
          </a>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-5">
        <h5>Property Location</h5>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: 51.388, lng: 0.088 }}
            zoom={15}
          >
            <Marker position={{ lat: 51.388, lng: 0.088 }} />
          </GoogleMap>
        ) : (
          <p>Loading Map...</p>
        )}
      </div>
    </div>
  );
};

export default EstateDetails;
