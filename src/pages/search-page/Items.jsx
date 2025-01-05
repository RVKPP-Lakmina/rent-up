import React from "react";
import MainList from "../../component/MainList";
import FavoriteList from "../../component/FavoriteList ";
import { useAdvancedSearch } from "../../providers/AdvancedSearchProvider";

const Items = () => {
  const { favoritesSectionActive } = useAdvancedSearch();

  return (
    <div className="app-container p-5" style={{ display: "flex", gap: "20px" }}>
      <MainList />
    </div>
  );
};

export default Items;
