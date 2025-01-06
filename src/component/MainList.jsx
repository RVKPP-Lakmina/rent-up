import React from "react";
import CardComponent from "./CardComponent ";
import { useDrop } from "react-dnd";
import { useAdvancedSearch } from "../providers/AdvancedSearchProvider";

/**
 * MainList component renders a list of available properties.
 * It uses the `useAdvancedSearch` hook to fetch items and manage favorites.
 * It also sets up a drop target using `useDrop` from react-dnd to handle removing items from favorites.
 *
 * @component
 * @example
 * return (
 *   <MainList />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 */
const MainList = () => {
  const { items, removeFromFavorites, addToFavorites, itemMap } =
    useAdvancedSearch();
  const [, drop] = useDrop({
    accept: "card",
    drop: (item) => {
      removeFromFavorites(item.id);
    },
  });
  return (
    <div ref={drop} className="main-list" style={{ flex: 1, padding: "10px" }}>
      <h3 className="text-center py-1">Available Properties</h3>
      <div style={{ overflowY: "auto", maxHeight: "400px" }}>
        {items.map((card) => (
          <CardComponent
            key={itemMap.get(card).id}
            item={itemMap.get(card)}
            onFavorite={() => addToFavorites(card)}
            draggable
          />
        ))}
      </div>
    </div>
  );
};

export default MainList;
