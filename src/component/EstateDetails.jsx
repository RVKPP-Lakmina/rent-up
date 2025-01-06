import React from "react";
import Slider from "react-slick";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { propertiesData } from "../service/data";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LightboxGallery from "./LightboxGallery";
import { useMemo } from "react";

// Google Maps container styles
const containerStyle = {
  width: "100%",
  height: "300px",
};

const EstateDetails = () => {
  let { id } = useParams();
  const estateData = useMemo(() => propertiesData.properties, []);

  // Check if ID matches
  const data = useMemo(
    () => estateData.find((item) => item.id === id),
    [estateData, id]
  );

  // Google Maps Loader
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!data) {
    return <div>No Property Found</div>;
  }

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
            {data.title}
          </li>
        </ol>
      </nav>
      <div className="row">
        {/* Left Column - Image Slider */}
        <div className="col-lg-6 mb-4">
          <h3>{data.type} Details</h3>

          <LightboxGallery
            images={data.picturePanel.map((item, index) => ({
              thumbnail: item,
              full: item,
              caption: `${data.title} - Image ${index + 1}`,
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
        <div className="col-lg-6" style={{ color: "gray" }}>
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
            style={{ backgroundColor: "#ff5f00", color: "white" }}
            className="btn mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Agent
          </a>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="container mt-5">
        {/* Tab Navigation */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <button
              className="nav-link active"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description"
              type="button"
              role="tab"
              aria-controls="description"
              aria-selected="true"
              style={{
                color: "#ff5f00",
                // borderColor: "#ff5f00",
              }}
            >
              Description
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              id="google-map-tab"
              data-bs-toggle="tab"
              data-bs-target="#google-map"
              type="button"
              role="tab"
              aria-controls="google-map"
              aria-selected="false"
              style={{
                color: "#ff5f00",
                // borderColor: "#ff5f00",
              }}
            >
              Google Map
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              id="floor-plan-tab"
              data-bs-toggle="tab"
              data-bs-target="#floor-plan"
              type="button"
              role="tab"
              aria-controls="floor-plan"
              aria-selected="false"
              style={{
                color: "#ff5f00",
                // borderColor: "#ff5f00",
              }}
            >
              Floor Plan
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content mt-3">
          <div
            className="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <h5 style={{ color: "gray" }}> Property Description</h5>
            <p style={{ color: "gray" }}>{data.description}</p>
            <p style={{ color: "gray" }}>
              Added:
              {` ${data.added.day} ${data.added.month}, ${data.added.year}`}
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="google-map"
            role="tabpanel"
            aria-labelledby="google-map-tab"
          >
            <h5 style={{ color: "gray" }}>Property Location</h5>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: 51.388, lng: 0.088 }}
                zoom={15}
              >
                <Marker position={{ lat: 51.388, lng: 0.088 }} />
              </GoogleMap>
            ) : (
              <p style={{ color: "gray" }}>Loading Map...</p>
            )}
          </div>
          <div
            className="tab-pane fade"
            id="floor-plan"
            role="tabpanel"
            aria-labelledby="floor-plan-tab"
          >
            <h5 style={{ color: "gray" }}>Floor Plan</h5>
            <img
              src={`../../public/${data.floorPlan}`}
              alt="Floor Plan"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
