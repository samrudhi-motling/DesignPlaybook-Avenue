const Footer = () => {
    return (
      <footer className="bg-black text-white py-12 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="flex items-center gap-2">
              📍 1010 Avenue, SW 54321, City Name
            </p>
            <p className="flex items-center gap-2 mt-2">
              📞 +1 234 567 890
            </p>
            <p className="flex items-center gap-2 mt-2">
              ✉️ info@avenuegroup.com
            </p>
          </div>
          {/* Useful Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#companies" className="hover:text-gray-300">Companies</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          {/* Subscribe */}
          <div>
            <h2 className="text-xl font-bold mb-4">Subscribe</h2>
            <p className="text-sm mb-4">Stay updated with our latest news and updates.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="p-2 rounded-l-md w-full text-black" />
              <button className="bg-orange-500 p-2 rounded-r-md">📩</button>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-12 border-t border-white/20 pt-4">
          © 2025 Avenue Group. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  