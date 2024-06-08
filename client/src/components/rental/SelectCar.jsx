import { useContext, useState, useEffect } from "react";
import { CarContext } from "../../contexts/CarContext";

const SelectCar = () => {
  const { cars, selectedCar, setSelectedCar } = useContext(CarContext);
  const [selectedCarId, setSelectedCarId] = useState("");

  // Set the initial value of selectedCarId based on selectedCar
  useEffect(() => {
    if (selectedCar) {
      setSelectedCarId(selectedCar.id);
    }
  }, [selectedCar]);

  const handleSelectChange = (e) => {
    const carId = e.target.value;
    const car = cars.find((car) => car.id === carId);
    setSelectedCarId(carId);
    setSelectedCar(car);
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-white mb-2">Vehicle Info</label>
        <select
          value={selectedCarId}
          onChange={handleSelectChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Update car</option>
          {cars.map((car) => (
            <option key={car.id} value={car.id}>
              {car.make} {car.model}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectCar;
