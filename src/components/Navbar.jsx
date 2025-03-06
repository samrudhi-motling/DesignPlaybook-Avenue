import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#5825A6]/50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
          {/* Logo */}
          <Link to="/">
            <img src="/images/2.png" alt="Avenue Logo" className="h-14" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 w-2/3 h-screen bg-[#5825A6] transform transition-transform duration-300 z-50 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden flex flex-col items-start px-6 pt-20`}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ✖
            </button>
            <ul className="text-white font-semibold space-y-6 w-full">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-yellow-400 transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  className="w-full text-left hover:text-yellow-400 transition duration-200"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Companies
                </button>
                {isDropdownOpen && (
                  <ul className="bg-purple-700 rounded-lg mt-2 px-4 py-2 space-y-2">
                    {[
                      "Avenue Packs",
                      "Avenue Buildcon",
                      "Agrovan India",
                      "Agrovan Farm",
                      "Avenue Corporation",
                      "Sarvesh Petroleum",
                      "La Ruche Food Stuffs",
                      "Avenue Foundation",
                    ].map((company, index) => (
                      <li key={index} className="cursor-pointer">
                        {company === "Agrovan India" ? (
                          <Link
                            to="/agrovan"
                            className="hover:text-yellow-400 transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {company}
                          </Link>
                        ) : (
                          <span onClick={() => setIsMenuOpen(false)}>{company}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-12 text-white font-semibold">
            <li>
              <button
                className="hover:text-yellow-400 transition duration-200 focus:outline-none"
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-yellow-400 transition duration-200">
                About
              </Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="hover:text-yellow-400 transition duration-200 focus:outline-none">
                Companies
              </button>
              <ul
                className={`absolute left-0 mt-2 w-48 bg-[#5825A6] shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
                  isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {[
                  "Avenue Packs",
                  "Avenue Buildcon",
                  "Agrovan India",
                  "Agrovan Farm",
                  "Avenue Corporation",
                  "Sarvesh Petroleum",
                  "La Ruche Food Stuffs",
                  "Avenue Foundation",
                ].map((company, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-purple-700 cursor-pointer">
                    {company === "Agrovan India" ? (
                      <Link to="/agrovan" className="hover:text-yellow-400 transition duration-200">
                        {company}
                      </Link>
                    ) : (
                      company
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
