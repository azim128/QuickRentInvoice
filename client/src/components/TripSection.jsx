import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TripSection = () => {
  const [formState, setFormState] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: null,
    dropOffDate: null,
    pickUpTime: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date, name) => {
    setFormState({
      ...formState,
      [name]: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  const timeOptions = [
    "1pm-2pm",
    "2pm-3pm",
    "3pm-4pm",
    "4pm-5pm",
    "5pm-6pm",
    "6pm-7pm",
    "7pm-8pm",
    "8pm-9pm",
    "9pm-10pm",
    "10pm-11pm",
    "11pm-12am",
    "12am-1am",
    "1am-2am",
    "2am-3am",
    "3am-4am",
    "4am-5am",
    "5am-6am",
    "6am-7am",
    "7am-8am",
    "8am-9am",
    "9am-10am",
    "10am-11am",
    "11am-12pm",
    "12pm-1pm",
  ];

  return (
    <section className="bg-light py-12">
      <div className="container mx-auto ">
        <div className="flex flex-wrap -mx-4 px-4">
          <div className="w-full md:w-1/3  flex items-center">
            <form
              onSubmit={handleSubmit}
              className="bg-blue-600 p-8 rounded-lg w-full"
            >
              <h2 className="text-white text-2xl mb-4">Make your trip</h2>
              <div className="mb-4">
                <label className="block text-white mb-2">
                  Pick-up location
                </label>
                <input
                  type="text"
                  name="pickUpLocation"
                  value={formState.pickUpLocation}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  placeholder="City, Airport, Station, etc"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">
                  Drop-off location
                </label>
                <input
                  type="text"
                  name="dropOffLocation"
                  value={formState.dropOffLocation}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  placeholder="City, Airport, Station, etc"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <label className="block text-white mb-2">Pick-up date</label>
                  <DatePicker
                    selected={formState.pickUpDate}
                    onChange={(date) => handleDateChange(date, "pickUpDate")}
                    className="w-full p-2 rounded"
                    placeholderText="Date"
                    dateFormat="MM/dd/yyyy"
                  />
                </div>
                <div className="w-1/2 px-2">
                  <label className="block text-white mb-2">Drop-off date</label>
                  <DatePicker
                    selected={formState.dropOffDate}
                    onChange={(date) => handleDateChange(date, "dropOffDate")}
                    className="w-full p-2 rounded"
                    placeholderText="Date"
                    dateFormat="MM/dd/yyyy"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">Pick-up time</label>
                <select
                  name="pickUpTime"
                  value={formState.pickUpTime}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  {timeOptions.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
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
          <div className="w-full md:w-2/3 flex items-center ">
            <div className="bg-slate-300 px-8 py-16 rounded-r-md w-full">
              <h3 className="text-3xl mb-4">
                Better Way to Rent Your Perfect Cars
              </h3>
              <div className="flex flex-wrap mb-4">
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="bg-gray-100 p-4 rounded text-center h-full">
                    <div className="text-blue-600 text-4xl mb-2">📍</div>
                    <h3 className="text-xl">Choose Your Pickup Location</h3>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="bg-gray-100 p-4 rounded text-center h-full">
                    <div className="text-blue-600 text-4xl mb-2">🤝</div>
                    <h3 className="text-xl">Select the Best Deal</h3>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="bg-gray-100 p-4 rounded text-center h-full">
                    <div className="text-blue-600 text-4xl mb-2">🚗</div>
                    <h3 className="text-xl">Reserve Your Rental Car</h3>
                  </div>
                </div>
              </div>
              <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded">
                Reserve Your Perfect Car
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripSection;
