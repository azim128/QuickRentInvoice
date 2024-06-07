const VehicleCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="h-64 overflow-hidden">
        <img
          src={car.image}
          alt=""
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 overflow-clip">
        <h2 className="text-2xl font-bold">
          <a href="#">{car.name}</a>
        </h2>
        <div className="flex justify-between items-center mt-2 mb-4">
          <span className="text-gray-600">{car.brand}</span>
          <span className="text-blue-600 font-bold">
            {car.price}{' '}
            <span className="text-gray-600 font-normal">/day</span>
          </span>
        </div>
        <div className="flex space-x-2">
          <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;