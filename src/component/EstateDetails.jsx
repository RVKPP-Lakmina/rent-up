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
  let { id } = useParams();
  const estateData = propertiesData.properties || [];

  // Check if ID matches
  const data = estateData.find((estate) => estate.id === id) || null;

  // Google Maps Loader
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!data) {
    return <div>No Property Found</div>;
  }

  // Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="estate-details container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="nav-link" to="/search" style={{ color: "orange" }}>
              Search
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Item
          </li>
        </ol>
      </nav>
      <div className="row">
        {/* Left Column - Image Slider */}
        <div className="col-lg-6 mb-4">
          <h3>{data.type} Details</h3>

          <LightboxGallery
            images={data.picturePanel.map((item) => ({
              thumbnail: item,
              full: item,
              caption: item,
            }))}
          />
          {/* <Slider {...sliderSettings}>
            {data.picturePanel.map((pic, index) => (
              <div key={index}>
                {console.log(pic)}
                <img
                  src={"images/page-images/1/1.1.jpg"}
                  alt={`Property Image ${index + 1}`}
                  className="img-fluid rounded"
                />
              </div>
            ))}
          </Slider> */}
        </div>

        {/* Right Column - Property Details */}
        <div className="col-lg-6">
          <h4 style={{ color: "#ff5f00" }}>{data.type}</h4>
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
