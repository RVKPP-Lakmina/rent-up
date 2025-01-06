import React from "react";
import { useState, createContext } from "react";
import { propertiesData } from "../service/data.js";
import { useEffect } from "react";
import Loader from "../component/loader/Loader";

const AdvancedSearchContext = createContext(undefined);

const defaultSearchParams = {
  type: "any",
  minPrice: "",
  maxPrice: "",
  minBedrooms: "",
  maxBedrooms: "",
  dateFilterType: "after",
  startDate: "",
  endDate: "",
  postcode: "",
};

const itemMap = new Map(
  propertiesData.properties.map((item) => [item.id, item])
);

/**
 * AdvancedSearchProvider component provides context for advanced search functionality.
 * It manages the state of items, favorites, search parameters, and filters.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 *
 * @returns {JSX.Element} The AdvancedSearchProvider component.
 *
 * @example
 * <AdvancedSearchProvider>
 *   <YourComponent />
 * </AdvancedSearchProvider>
 *
 * @context
 * @property {Array} items - The list of item IDs.
 * @property {Array} favorites - The list of favorite item IDs.
 * @property {Function} addToFavorites - Function to add an item to favorites.
 * @property {Function} removeFromFavorites - Function to remove an item from favorites.
 * @property {Map} itemMap - Map of item details.
 * @property {Function} clearSearch - Function to clear search parameters.
 * @property {Function} filterList - Function to filter the list of items based on search parameters.
 * @property {Object} searchParams - The current search parameters.
 * @property {Object} savedSearchParams - The saved search parameters.
 * @property {boolean} filtersSectionActive - State indicating if the filters section is active.
 * @property {Function} setFiltersSectionActive - Function to set the filters section active state.
 * @property {boolean} favoritesSectionActive - State indicating if the favorites section is active.
 * @property {Function} setFavoritesSectionActive - Function to set the favorites section active state.
 */
export const AdvancedSearchProvider = ({ children }) => {
  const [items, setItems] = useState(Array.from(itemMap.keys()));
  const [favorites, setFavorites] = useState([]);
  const activeFilters = React.useRef(false);
  const savedSearchParams = React.useRef(
    JSON.parse(JSON.stringify(defaultSearchParams))
  );
  const [searchParams, setSearchParams] = useState(
    JSON.parse(JSON.stringify(defaultSearchParams))
  );
  const [filtersSectionActive, setFiltersSectionActive] = useState(false);
  const [favoritesSectionActive, setFavoritesSectionActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const allItems = JSON.parse(localStorage.getItem("allItems")) || [];

    if (favorites.length === 0 && allItems.length === 0) {
      localStorage.setItem("allItems", JSON.stringify(items));
    }

    setItems(allItems);
    setFavorites(favorites);
    setLoading(false);
  }, []);

  const addToFavorites = (id) => {
    setFavorites([...favorites, id]);
    const filteredItems = items.filter((i) => i !== id);
    setItems(filteredItems);
    localStorage.setItem("allItems", JSON.stringify(filteredItems));
    localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
  };

  const removeFromFavorites = (id) => {
    setItems([...items, id]);
    const filteredFavorites = favorites.filter((f) => f !== id);
    setFavorites(filteredFavorites);
    localStorage.setItem("allItems", JSON.stringify([...items, id]));
    localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
  };

  const clearSearch = () => {
    activeFilters.current = false;
    setSearchParams(JSON.parse(JSON.stringify(defaultSearchParams)));
    setItems(Array.from(itemMap.keys()));
  };

  const filterList = () => {
    let filtered = [...Array.from(itemMap.values())];
    const {
      type,
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
      dateFilterType,
      startDate,
      endDate,
      postcode,
    } = savedSearchParams.current;

    if (type !== "any")
      filtered = filtered.filter(
        (item) => item.type.toLocaleLowerCase() === type.toLocaleLowerCase()
      );
    if (minPrice)
      filtered = filtered.filter((item) => item.price >= Number(minPrice));
    if (maxPrice)
      filtered = filtered.filter((item) => item.price <= Number(maxPrice));
    if (minBedrooms)
      filtered = filtered.filter(
        (item) => item.bedrooms >= Number(minBedrooms)
      );
    if (maxBedrooms)
      filtered = filtered.filter(
        (item) => item.bedrooms <= Number(maxBedrooms)
      );

    if (dateFilterType === "after" && startDate) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(
          `${item.added.year}-${item.added.month}-${item.added.day}`
        );
        return itemDate >= new Date(startDate);
      });
    } else if (dateFilterType === "between" && startDate && endDate) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(
          `${item.added.year}-${item.added.month}-${item.added.day}`
        );
        return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
      });
    }

    if (postcode)
      filtered = filtered.filter((item) =>
        item.location.toLowerCase().includes(postcode.toLowerCase())
      );
    activeFilters.current = true;
    setItems(filtered.map((item) => item.id));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <AdvancedSearchContext.Provider
      value={{
        items,
        favorites,
        addToFavorites,
        removeFromFavorites,
        itemMap,
        clearSearch,
        filterList,
        searchParams,
        savedSearchParams,
        filtersSectionActive,
        setFiltersSectionActive,
        favoritesSectionActive,
        setFavoritesSectionActive,
      }}
    >
      {children}
    </AdvancedSearchContext.Provider>
  );
};

export const useAdvancedSearch = () => {
  const context = React.useContext(AdvancedSearchContext);
  if (context === undefined) {
    throw new Error(
      "useAdvancedSearch must be used within a AdvancedSearchProvider"
    );
  }
  return context;
};
