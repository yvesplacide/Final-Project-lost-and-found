import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-300">
          DéclaPerte
        </Link>

        {/* Menu burger - visible sur petits écrans */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu links - hidden on mobile unless open */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-blue-700 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            end
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 underline"
                : "block px-4 py-2 hover:text-blue-300"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/declaration"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 underline"
                : "block px-4 py-2 hover:text-blue-300"
            }
          >
            Déclarer
          </NavLink>
          <NavLink
            to="/liste"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 underline"
                : "block px-4 py-2 hover:text-blue-300"
            }
          >
            Liste
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
