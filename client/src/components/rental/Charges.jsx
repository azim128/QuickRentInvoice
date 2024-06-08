

const Charges = ({ formState, handleChange }) => {
  return (
    <div className="flex -mx-2 mb-4">
      <div className="px-2 w-1/2">
        <label className="block text-white mb-2">Discounts</label>
        <input
          type="text"
          name="discounts"
          value={formState.discounts}
          onChange={handleChange}
          className="w-full p-2 rounded"
          placeholder="Discounts"
        />
      </div>
      <div className="px-2 w-1/2">
        <label className="block text-white mb-2">Additional Charges</label>
        <input
          type="text"
          name="additionalCharges"
          value={formState.additionalCharges}
          onChange={handleChange}
          className="w-full p-2 rounded"
          placeholder="Additional Charges"
        />
      </div>
    </div>
  );
};

export default Charges;
