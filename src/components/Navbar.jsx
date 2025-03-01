import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        setIsScrollingUp(true);
      }
      if (currentScrollY === 0) {
        setIsScrollingUp(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isVisible ? "top-0" : "-top-full"
      } ${isScrollingUp ? "bg-[#5825A6]/50 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-10">
        {/* Logo */}
        <Link to="/" className="ml-6">
          <img src="/images/2.png" alt="Avenue Logo" className="h-14" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex justify-center space-x-16 text-white font-semibold tracking-wide">
          <li>
            <a href="#about" className="hover:text-yellow-400">About</a>
          </li>
          <li 
            className="relative group" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-yellow-400 focus:outline-none">
              Companies
            </button>
            {/* Dropdown Menu */}
            <ul
              className={`absolute left-0 mt-2 w-48 bg-[#5825A6] shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
                isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Avenue Packs</li>
              <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Avenue Buildcon</li>
              <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Agrovan India</li>
              <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Agrovan Farm</li>
              <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Avenue Corporation</li>
              <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Sarvesh Petroleum</li>
              <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">La Ruche Food Stuffs</li>
              <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Avenue Foundation</li>
            </ul>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400">Services</a>
          </li>
          <li>
            {/* ✅ Use Link for navigation to Contact page */}
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
