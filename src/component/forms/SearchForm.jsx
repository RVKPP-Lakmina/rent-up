import { useState } from "react";
import { propertiesData } from "../../service/data";

const AdvancedSearch = () => {
  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateAdded: "",
    postcode: "",
  });

  const [results, setResults] = useState(propertiesData.properties);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filterProperties = () => {
    const filtered = propertiesData.properties.filter((property) => {
      const { type, bedrooms, price, added, location } = property;
      const {
        minPrice,
        maxPrice,
        minBedrooms,
        maxBedrooms,
        dateAdded,
        postcode,
      } = filters;

      const addedDate = new Date(`${added.year}-${added.month}-${added.day}`);
      const filterDate = dateAdded ? new Date(dateAdded) : null;

      return (
        (!filters.type || type.toLowerCase() === filters.type.toLowerCase()) &&
        (!minPrice || price >= parseInt(minPrice)) &&
        (!maxPrice || price <= parseInt(maxPrice)) &&
        (!minBedrooms || bedrooms >= parseInt(minBedrooms)) &&
        (!maxBedrooms || bedrooms <= parseInt(maxBedrooms)) &&
        (!dateAdded || addedDate >= filterDate) &&
        (!postcode || location.toLowerCase().includes(postcode.toLowerCase()))
      );
    });

    setResults(filtered);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterProperties();
  };

  return (
    <div className="container my-4">
      <h3 className="text-center">Advanced Property Search</h3>
      <form
        onSubmit={handleSearch}
        className="border p-4 rounded shadow-sm bg-light"
      >
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <select
              id="type"
              name="type"
              className="form-select"
              value={filters.type}
              onChange={handleInputChange}
            >
              <option value="">Any</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="minPrice" className="form-label">
              Min Price (£)
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              className="form-control"
              value={filters.minPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="maxPrice" className="form-label">
              Max Price (£)
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              className="form-control"
              value={filters.maxPrice}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="minBedrooms" className="form-label">
              Min Bedrooms
            </label>
            <input
              type="number"
              id="minBedrooms"
              name="minBedrooms"
              className="form-control"
              value={filters.minBedrooms}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="maxBedrooms" className="form-label">
              Max Bedrooms
            </label>
            <input
              type="number"
              id="maxBedrooms"
              name="maxBedrooms"
              className="form-control"
              value={filters.maxBedrooms}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="dateAdded" className="form-label">
              Date Added (After)
            </label>
            <input
              type="date"
              id="dateAdded"
              name="dateAdded"
              className="form-control"
              value={filters.dateAdded}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="postcode" className="form-label">
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              className="form-control"
              value={filters.postcode}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      <div className="mt-4">
        <h4>Results</h4>
        {results.length > 0 ? (
          results.map((property) => (
            <div key={property.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={property.picture}
                    alt={property.type}
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {property.type} - £{property.price}
                    </h5>
                    <p className="card-text">{property.description}</p>
                    <p className="card-text">
                      <small className="text-muted">{property.location}</small>
                    </p>
                    <a href={property.url} className="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default AdvancedSearch;
