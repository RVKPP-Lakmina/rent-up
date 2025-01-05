import React from "react";
import { useAdvancedSearch } from "../../providers/AdvancedSearchProvider";
import { Tabs, Tab } from "react-bootstrap"; // Using Bootstrap Tabs for the type selection

const AdvancedSearchForm = () => {
  const { filterList, clearSearch, savedSearchParams } = useAdvancedSearch();
  const [selectedType, setSelectedType] = React.useState("any");
  const [selectedDateFilter, setSelectedDateFilter] = React.useState(
    savedSearchParams.current.dateFilterType
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    savedSearchParams.current[name] = value;
  };

  const handleSearch = () => {
    filterList();
  };

  return (
    <div className="advanced-search p-3 bg-light">
      <h5>Advanced Search</h5>

      {/* Type Selection */}
      <Tabs
        activeKey={savedSearchParams.current.type || selectedType}
        onSelect={(k) => {
          savedSearchParams.current.type = k;
          setSelectedType(k);
        }}
        style={{ color: "#ff5f00 !important" }}
        className="mb-3 custom-tabs"
      >
        <Tab eventKey="any" title="Any" />
        <Tab eventKey="house" title="House" />
        <Tab eventKey="flat" title="Flat" />
      </Tabs>

      {/* Min and Max Price */}
      <div className="mb-3">
        <label className="form-label">Price Range (USD)</label>
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              name="minPrice"
              defaultValue={savedSearchParams.current.minPrice}
              onChange={handleInputChange}
              placeholder="Min Price"
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              name="maxPrice"
              defaultValue={savedSearchParams.current.maxPrice}
              onChange={handleInputChange}
              placeholder="Max Price"
            />
          </div>
        </div>
      </div>

      {/* Min and Max Bedrooms */}
      <div className="mb-3">
        <label className="form-label">Bedrooms</label>
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              name="minBedrooms"
              defaultValue={savedSearchParams.current.minBedrooms}
              onChange={handleInputChange}
              placeholder="Min Bedrooms"
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              name="maxBedrooms"
              defaultValue={savedSearchParams.current.maxBedrooms}
              onChange={handleInputChange}
              placeholder="Max Bedrooms"
            />
          </div>
        </div>
      </div>

      {/* Date Filter */}
      <div className="mb-3">
        <label className="form-label">Date Filter</label>
        <select
          className="form-select mb-2"
          name="dateFilterType"
          value={selectedDateFilter}
          onChange={(e) => {
            savedSearchParams.current.dateFilterType = e.target.value;
            setSelectedDateFilter(e.target.value);
          }}
        >
          <option value="after">After</option>
          <option value="between">Between</option>
        </select>
        {selectedDateFilter === "after" && (
          <input
            type="date"
            className="form-control"
            name="startDate"
            defaultValue={savedSearchParams.current.startDate}
            onChange={handleInputChange}
          />
        )}
        {selectedDateFilter === "between" && (
          <div className="mb-3">
            <div className="row">
              <div className="col-6">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  className="form-control mb-2"
                  name="startDate"
                  defaultValue={savedSearchParams.current.startDate}
                  onChange={handleInputChange}
                  placeholder="Start Date"
                />
              </div>
              <div className="col-6">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  defaultValue={savedSearchParams.current.endDate}
                  onChange={handleInputChange}
                  placeholder="End Date"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Postcode */}
      <div className="mb-3">
        <label className="form-label">Postcode Area</label>
        <input
          type="text"
          className="form-control"
          name="postcode"
          defaultValue={savedSearchParams.current.postcode}
          onChange={handleInputChange}
          placeholder="e.g., BR1, NW1"
        />
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-between">
        <button className="btn bg-color-custom" onClick={handleSearch}>
          Search
        </button>
        <button className="btn btn-outline-secondary" onClick={clearSearch}>
          Clear Search
        </button>
      </div>
    </div>
  );
};

export const AdvancedSearch = () => {
  const { filtersSectionActive, setFiltersSectionActive } = useAdvancedSearch();
  return (
    <>
      <div
        className={`offcanvas offcanvas-end ${
          filtersSectionActive ? "show" : ""
        } d-md-none`}
        tabIndex="-1"
        style={{
          visibility: filtersSectionActive ? "visible" : "hidden",
        }}
        id="advancedSearchSidebar"
        aria-labelledby="advancedSearchLabel"
      >
        <div className="offcanvas-header">
          <h5 id="advancedSearchLabel">Advanced Search</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setFiltersSectionActive(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <AdvancedSearchForm />
        </div>
      </div>

      <div className="d-none d-md-block col-md-4 py-5">
        <AdvancedSearchForm />
      </div>
    </>
  );
};
