import React from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useDrag } from "react-dnd";
import { useNavigate } from "react-router";
import { MdOutlineReadMore } from "react-icons/md";

const CardComponent = ({ item, onFavorite, onDelete, draggable, favorite }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  let navigate = useNavigate();

  return (
    <div
      ref={draggable ? drag : null}
      className={`card mb-3 ${favorite ? "border-danger" : ""}`}
      style={{
        cursor: isDragging ? "grab" : "pointer",
        opacity: 1,
        transition: "background-color 0.3s",
      }}
    >
      <div className="row g-0">
        {/* Left: Cover Image */}
        <div className="col-md-4">
          <img
            src={item.picture}
            alt={item.location}
            className="img-fluid rounded-start"
            style={{ height: "100%", objectFit: "cover", maxHeight: "200px" }}
          />
        </div>

        {/* Right: Content */}
        <div className="col-md-8 d-flex flex-column">
          <div className="card-body">
            <h5 className="card-title">{item.location}</h5>
            <p className="card-text">
              <small className="text-muted">{item.bedrooms} Bedrooms</small>
            </p>
            <p className="card-text">${item.price.toLocaleString()}</p>
            <p className="card-text">
              <small className="text-muted">Address: {item.location}</small>
            </p>
          </div>

          {/* Actions */}
          <div className="card-footer d-flex justify-content-end gap-2 mt-auto bg-white border-top-0">
            <span
              onClick={() => navigate(`/search/${item.id}`)}
              className=" d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <MdOutlineReadMore className="me-1" /> <span>Show More...</span>
            </span>
            {onFavorite && (
              <span
                onClick={onFavorite}
                className="text-danger d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <FaHeart className="me-1" /> <span>Add to Favorite</span>
              </span>
            )}
            {onDelete && (
              <FaTrash
                onClick={onDelete}
                className="text-secondary"
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
