import React from "react";
import CardComponent from "./CardComponent ";
import { useDrop } from "react-dnd";
import { useAdvancedSearch } from "../providers/AdvancedSearchProvider";

const MainList = () => {
  const { items, removeFromFavorites, addToFavorites, itemMap } =
    useAdvancedSearch();
  const [, drop] = useDrop({
    accept: "card",
    drop: (item) => {
      console.log("Dropped", item);
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
