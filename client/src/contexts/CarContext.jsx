import axios from "axios";
import propTypes from "prop-types";
import { createContext, useState } from "react";
import { fetch_api_url, serverl_url } from "../config/variableConfig";
import { useEffect } from "react";
export const CarContext = createContext();

const CarContextProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [rental, setRental] = useState(null);

  const fetchCars = async () => {
    try {
      const response = await axios.get(`${fetch_api_url}`);
      console.log("response.data", response.data);
      setCars(response.data.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  console.log("selectedCar", selectedCar);

  const createRental = async (rentalData) => {
    try {
      console.log("rentalData", rentalData);
      const response = await axios.post(`${serverl_url}/rentals`, rentalData);
      setRental(response.data);
      return response;
    } catch (error) {
      console.error("Error creating rental:", error);
    }
  };
useEffect(() => {
  fetchCars();
}, []);
  return (
    <CarContext.Provider
      value={{
        cars,
        selectedCar,
        setSelectedCar,
        fetchCars,
        createRental,
        rental,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

CarContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default CarContextProvider;
