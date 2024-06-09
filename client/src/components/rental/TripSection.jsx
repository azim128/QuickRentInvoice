import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarContext } from "../../contexts/CarContext";
import SelectCar from "./SelectCar";
import CustomerDetails from "./CustomerDetails";
import DateSelector from "./DateSelector";
import Charges from "./Charges";
import FeatureSection from "./FeatureSection";


const TripSection = () => {
  const { selectedCar, createRental } = useContext(CarContext);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    discounts: 0,
    additionalCharges: 0,
  });
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCar) {
      alert("Please select a car before submitting the form.");
      return;
    }
    const res = await createRental({
      customer,
      car: {
        type: selectedCar.type,
        model: selectedCar.model,
        rates: selectedCar.rates,
      },
      pickupDate: pickupDate ? pickupDate.getTime() : null,
      dropoffDate: dropoffDate ? dropoffDate.getTime() : null,
      rentper: "weekly",
      discounts: formState.discounts,
      additionalCharges: formState.additionalCharges,
    });
    console.log("res", res);
    if (res.status === 200) {
      navigate("/invoice");
    }
  };

  return (
    <section className="bg-light py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 px-4">
          <div className="w-full md:w-1/3 flex items-center">
            <form
              onSubmit={handleSubmit}
              className="bg-blue-600 p-8 rounded-lg w-full"
            >
              <h2 className="text-white text-2xl mb-4">Make your trip</h2>
              <SelectCar />
              <CustomerDetails customer={customer} setCustomer={setCustomer} />
              <DateSelector
                pickupDate={pickupDate}
                setPickupDate={setPickupDate}
                dropoffDate={dropoffDate}
                setDropoffDate={setDropoffDate}
              />
              <Charges formState={formState} handleChange={handleChange} />
              <div>
                <button
                  type="submit"
                  className="bg-gray-800 text-white py-2 px-4 rounded"
                >
                  Rent A Car Now
                </button>
              </div>
            </form>
          </div>
          <FeatureSection/>
        </div>
      </div>
    </section>
  );
};

export default TripSection;
