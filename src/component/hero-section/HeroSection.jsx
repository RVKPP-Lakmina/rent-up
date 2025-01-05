import "./hero-section.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";

const HeroPage = () => {
  let navigate = useNavigate();

  return (
    <div className="p-5">
      <div className=" bg-black p-5 text-center opacity-75">
        <h1 className="text-warning">
          Welcome to <br /> RentUp
        </h1>
        <p className="">
          Your dream property is just a click away. Search houses, flats, or any
          property with ease.
        </p>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            className="btn btn-warning w-10"
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
