import "./hero-section.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";

const HeroPage = () => {
  let navigate = useNavigate();

  return (
    <div className="p-3">
      <div className="bg-black p-4 text-center opacity-75 rounded">
        <h1 className="text-warning display-4">
          Welcome to <br /> RentUp
        </h1>
        <p className="text-light fs-5">
          Your dream property is just a click away. Search houses, flats, or any
          property with ease.
        </p>
        <div className="d-grid gap-2 col-md-6 col-8 mx-auto">
          <button
            type="button"
            className="btn btn-warning btn-lg"
            onClick={() => navigate("/search")}
          >
            <CiSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
