const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center "
      style={{ backgroundImage: "url('/bg_1.jpg')" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Fast &amp; Easy Way To Rent A Car
            </h1>
            <p className="text-lg md:text-xl mb-4 max-w-xl mx-auto">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts
            </p>
            <p
              className="flex items-center justify-center mt-4 text-white"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">▶️</span>
              </div>
              <div className="ml-4">
                <span className="text-lg">Easy steps for renting a car</span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
