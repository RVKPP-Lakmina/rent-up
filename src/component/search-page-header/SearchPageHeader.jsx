import React from "react";
import { FcFilledFilter } from "react-icons/fc";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FcClearFilters } from "react-icons/fc";
import { useAdvancedSearch } from "../../providers/AdvancedSearchProvider";
import { useDrop } from "react-dnd";

const SearchPageHeader = () => {
  const {
    filtersSectionActive,
    setFiltersSectionActive,
    favoritesSectionActive,
    setFavoritesSectionActive,
    favorites,
    addToFavorites,
  } = useAdvancedSearch();

  const [, drop] = useDrop({
    accept: "card",
    drop: (item) => {
      console.log("Dropped", item);
      addToFavorites(item.id);
    },
  });

  return (
    <div className="d-flex justify-content-between py-3">
      <div
        className="d-flex align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setFavoritesSectionActive(false);
          setFiltersSectionActive(!filtersSectionActive);
        }}
      >
        {filtersSectionActive ? (
          <FcClearFilters size={"2rem"} />
        ) : (
          <FcFilledFilter size={"2rem"} />
        )}{" "}
        Advanced Filter
      </div>
      <div
        ref={drop}
        className="d-flex align-items-center"
        style={{ cursor: "pointer", position: "relative" }}
        onClick={() => {
          setFiltersSectionActive(false);
          setFavoritesSectionActive(!favoritesSectionActive);
        }}
      >
        <div
          className={`${favorites.length > 0 ? "d-block" : "d-none"}`}
          style={{
            position: "absolute",
            top: "14%",
            left: favorites.length > 9 ? "6%" : "11%",
            color: favoritesSectionActive ? "rgb(245, 124, 0)" : "white",
          }}
        >
          {favorites.length || ""}
        </div>
        {favoritesSectionActive ? (
          <MdOutlineFavoriteBorder fill="rgb(245, 124, 0)" size={"2rem"} />
        ) : (
          <MdOutlineFavorite fill="rgb(245, 124, 0)" size={"2rem"} />
        )}{" "}
        Favorites
      </div>
    </div>
  );
};

export default React.memo(SearchPageHeader);
