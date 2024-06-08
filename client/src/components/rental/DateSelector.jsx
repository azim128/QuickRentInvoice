


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({
  pickupDate,
  setPickupDate,
  dropoffDate,
  setDropoffDate,
}) => {
  return (
    <div className="flex -mx-2 mb-4">
      <div className="px-2 w-1/2">
        <label className="block text-gray-700 font-medium mb-2">
          Pickup Date
        </label>
        <DatePicker
          selected={pickupDate}
          onChange={(date) => setPickupDate(date)}
          showTimeSelect
          dateFormat="Pp"
          className="w-full p-2 rounded"
          placeholderText="Select Pickup Date and Time"
          required
        />
      </div>
      <div className="px-2 w-1/2">
        <label className="block text-gray-700 font-medium mb-2">
          Dropoff Date
        </label>
        <DatePicker
          selected={dropoffDate}
          onChange={(date) => setDropoffDate(date)}
          showTimeSelect
          dateFormat="Pp"
          className="w-full p-2 rounded"
          placeholderText="Select Dropoff Date and Time"
          required
        />
      </div>
    </div>
  );
};



export default DateSelector;
