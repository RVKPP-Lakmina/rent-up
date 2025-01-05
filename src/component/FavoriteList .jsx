import React from "react";
import CardComponent from "./CardComponent ";
import { useDrop } from "react-dnd";
import { useAdvancedSearch } from "../providers/AdvancedSearchProvider";

const FavoriteList = () => {
  const { favorites, addToFavorites, removeFromFavorites, itemMap } =
    useAdvancedSearch();
  const [, drop] = useDrop({
    accept: "card",
    drop: (item) => {
      console.log("Dropped", item);
      addToFavorites(item.id);
    },
  });

  return (
    <div
      ref={drop}
      className="favorite-list p-3"
      style={{
        flex: 1,
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="m-0">Favorites</h3>
        <small className="text-muted">
          {favorites.length} {favorites.length === 1 ? "item" : "items"}
        </small>
      </div>

      {/* Favorites List */}
      <div
        className="favorites-container"
        style={{
          overflowY: "auto",
          maxHeight: "400px",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          padding: "10px",
          border: "1px solid #eaeaea",
        }}
      >
        {favorites.length > 0 ? (
          favorites.map((card) => (
            <CardComponent
              key={itemMap.get(card).id}
              item={itemMap.get(card)}
              onDelete={() => removeFromFavorites(card)}
              favorite
              draggable
            />
          ))
        ) : (
          <p className="text-center text-muted m-0">
            No favorites added yet. Start adding some!
          </p>
        )}
      </div>
    </div>
  );
};
export default FavoriteList;
