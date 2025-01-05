import React from "react";
import Items from "./Items";
import "./search-page.css";
import {
  AdvancedSearchProvider,
  useAdvancedSearch,
} from "../../providers/AdvancedSearchProvider";
import { AdvancedSearch } from "../../component/forms/AdvancedSearchForm";
import SearchPageHeader from "../../component/search-page-header/SearchPageHeader";
import FavoriteList from "../../component/FavoriteList ";

const SearchPageChild = () => {
  const { filtersSectionActive, favoritesSectionActive } = useAdvancedSearch();

  return (
    <div className="container">
      <SearchPageHeader />
      <div className="row">
        {/* Filters Section */}
        {filtersSectionActive && <AdvancedSearch />}

        {/* Main Items Section */}
        <div
          className={`${
            filtersSectionActive || favoritesSectionActive
              ? "col-10 col-md-8"
              : "col-12"
          }`}
        >
          <Items />
        </div>

        {/* Favorites Section */}
        {favoritesSectionActive && (
          <div className="col-md-4 py-5">
            <FavoriteList />
          </div>
        )}
      </div>
    </div>
  );
};

const SearchPage = () => {
  return (
    <AdvancedSearchProvider>
      <SearchPageChild />
    </AdvancedSearchProvider>
  );
};

export default React.memo(SearchPage);
