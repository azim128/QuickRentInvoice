function FeatureSection() {

  return (
    <div className="w-full md:w-2/3 flex items-center">
      <div className="bg-slate-300 px-8 py-24 rounded-r-md w-full">
        <h3 className="text-3xl mb-4">Better Way to Rent Your Perfect Cars</h3>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-gray-100 p-4 rounded text-center h-full">
              <div className="text-blue-600 text-4xl mb-2">📍</div>
              <h3 className="text-xl">Choose Your Vehicle</h3>
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
  );
}

export default FeatureSection;
