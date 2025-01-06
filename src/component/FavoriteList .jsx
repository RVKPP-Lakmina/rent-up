import React from "react";
import CardComponent from "./CardComponent ";
import { useDrop } from "react-dnd";
import { useAdvancedSearch } from "../providers/AdvancedSearchProvider";

/**
 * FavoriteList component renders a list of favorite items.
 * 
 * This component uses the `useAdvancedSearch` hook to manage the state of favorite items,
 * including adding and removing items from the favorites list. It also integrates with
 * the `useDrop` hook from react-dnd to handle drag-and-drop functionality.
 * 
 * @component
 * @example
 * // Example usage:
 * // <FavoriteList />
 * 
 * @returns {JSX.Element} The rendered FavoriteList component.
 * 
 * @remarks
 * - The component displays a header with the count of favorite items.
 * - The favorites list is scrollable and has a maximum height of 400px.
 * - If there are no favorite items, a message is displayed to the user.
 * 
 * @hook
 * @function useAdvancedSearch
 * @returns {Object} An object containing the favorites array, addToFavorites function,
 * removeFromFavorites function, and itemMap.
 * 
 * @hook
 * @function useDrop
 * @param {Object} options - The options object for configuring the drop behavior.
 * @returns {Array} An array containing the collected properties and the drop ref.
 */
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
