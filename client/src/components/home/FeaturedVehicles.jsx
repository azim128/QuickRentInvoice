import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext.jsx";
import VehicleCard from "./VehicleCard.jsx";
const FeaturedVehicles = () => {
  const { cars } = useContext(CarContext);
  console.log("cars", cars);
  return (
    <section className="bg-light py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-lg text-gray-600 uppercase">What we offer</span>
          <h2 className="text-4xl font-bold">Featured Vehicles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
