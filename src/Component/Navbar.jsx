
    
import { Link } from "react-router-dom";
import ashif from "../assets/ashif khan.jpeg";

function Navbar() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:px-10">

        {/* Profile Image */}
        <div
          className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${ashif})` }}
        ></div>

        {/* Name and Role */}
        <div>
          <h1 className="text-xl font-bold text-white">
            Ashi<span className="text-green-500">f</span>
          </h1>

          <h4 className="text-xs font-medium text-gray-300">
            Web Developer
          </h4>
        </div>

        {/* Navigation Links */}
        <div className="ml-auto flex flex-wrap items-center gap-7 text-sm font-bold text-white sm:gap-9 md:gap-11 lg:gap-20 lg:text-xl">

          <Link className="transition hover:text-green-500" to="/">
            Home
          </Link>

          <Link className="transition hover:text-green-500" to="/about">
            About
          </Link>

         

          <Link className="transition hover:text-green-500" to="/experience">
            Experience
          </Link>

          <Link className="transition hover:text-green-500" to="/contact">
            Contact
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
