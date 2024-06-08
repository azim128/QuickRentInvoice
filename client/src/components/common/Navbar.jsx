const Navbar = () => {
  return (
    <nav className="bg-dark-900 p-4 absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a className="text-white text-xl font-bold" href="index.html">
          Car<span className="text-blue-500">Book</span>
        </a>
        <button
          className="text-white inline-flex items-center p-2 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          type="button"
          aria-controls="navbar-content"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="w-full md:block md:w-auto" id="navbar-content">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li className="nav-item">
              <a
                href="#"
                className="text-white block py-2 pr-4 pl-3 rounded md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="text-white block py-2 pr-4 pl-3 rounded md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="text-white block py-2 pr-4 pl-3 rounded md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Book A Car
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
