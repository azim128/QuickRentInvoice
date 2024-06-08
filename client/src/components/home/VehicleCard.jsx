import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarContext } from "../../contexts/CarContext";
const VehicleCard = ({ car }) => {
  const [pricingOption, setPricingOption] = useState("daily");
  const { setSelectedCar } = useContext(CarContext);
  const navigate = useNavigate();
  // Define the pricing based on the selected option
  const getPrice = () => {
    switch (pricingOption) {
      case "hourly":
        return `${car?.rates.hourly} /hour`;
      case "daily":
        return `${car.rates.daily} /day`;
      case "weekly":
        return `${car.rates.weekly} /week`;
      default:
        return `${car.rates.daily} /day`;
    }
  };
  const handleClick = (car) => {
    setSelectedCar(car);
    navigate("/rental");
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="h-64 overflow-hidden">
        <img
          src={car.imageURL}
          alt=""
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 overflow-clip">
        <div className="flex justify-center space-x-4 my-4">
          <button
            onClick={() => setPricingOption("hourly")}
            className={`py-1 px-4 rounded text-base ${
              pricingOption === "hourly"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Hourly
          </button>
          <button
            onClick={() => setPricingOption("daily")}
            className={`py-1 px-4 rounded text-base ${
              pricingOption === "daily"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setPricingOption("weekly")}
            className={`py-1 px-4 rounded text-base ${
              pricingOption === "weekly"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Weekly
          </button>
        </div>
        <h2 className="text-2xl font-bold">
          <a href="#">{car.name}</a>
        </h2>
        <div className="flex justify-between items-center mt-2 mb-4">
          <span className="text-gray-600">{car.brand}</span>
          <span className="text-blue-600 font-bold">{getPrice()}</span>
        </div>

        <div className="flex space-x-2 justify-center items-center">
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleClick(car)}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
